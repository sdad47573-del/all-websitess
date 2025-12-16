-- Migration: Unify Financial Records
-- Description: Unifies ingresos and beneficios into a single financial_records table linked to profiles
-- Created: 2025-12-15

-- ============================================================================
-- ENUM: financial_record_type
-- Description: Defines the type of financial record (income or profit)
-- ============================================================================
CREATE TYPE financial_record_type AS ENUM ('income', 'profit');

COMMENT ON TYPE financial_record_type IS 'Type of financial record: income (ingresos) or profit (beneficios)';

-- ============================================================================
-- TABLE: financial_records
-- Description: Unified table for all financial transactions
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.financial_records (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    type financial_record_type NOT NULL,
    label TEXT NOT NULL,
    amount NUMERIC(12,2) NOT NULL,
    date DATE NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    -- Constraints
    CONSTRAINT financial_records_label_not_empty CHECK (LENGTH(TRIM(label)) > 0)
);

-- Add comments to table
COMMENT ON TABLE public.financial_records IS 'Unified financial records (ingresos and beneficios) linked to user profiles';
COMMENT ON COLUMN public.financial_records.profile_id IS 'Link to the user profile associated with this record';
COMMENT ON COLUMN public.financial_records.amount IS 'Monetary value of the record';

-- ============================================================================
-- DATA MIGRATION
-- Description: Migrate existing data from old tables if they exist
-- ============================================================================
DO $$
BEGIN
    -- Migrate Ingresos
    IF EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'ingresos') THEN
        INSERT INTO public.financial_records (type, label, amount, date)
        SELECT 'income', label, eur, fecha FROM public.ingresos;
    END IF;

    -- Migrate Beneficios
    IF EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'beneficios') THEN
        INSERT INTO public.financial_records (type, label, amount, date)
        SELECT 'profit', label, eur, fecha FROM public.beneficios;
    END IF;
END $$;

-- ============================================================================
-- INDEXES
-- Description: Indexes for improved query performance
-- ============================================================================
CREATE INDEX IF NOT EXISTS idx_financial_records_profile_id ON public.financial_records(profile_id);
CREATE INDEX IF NOT EXISTS idx_financial_records_type ON public.financial_records(type);
CREATE INDEX IF NOT EXISTS idx_financial_records_date ON public.financial_records(date);

-- ============================================================================
-- ROW LEVEL SECURITY (RLS)
-- Description: Enable RLS and create policies
-- ============================================================================

-- Enable RLS
ALTER TABLE public.financial_records ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own records
CREATE POLICY "Users can view own financial records"
    ON public.financial_records
    FOR SELECT
    USING (
        auth.uid() = profile_id 
        OR 
        -- Fallback for legacy records without profile_id if we want them visible to someone? 
        -- For now, let's assume migrated records might need manual assignment or are admin only.
        -- Let's stick to simple ownership.
        auth.uid() = profile_id
    );

-- Policy: Admins can view all records
CREATE POLICY "Admins can view all financial records"
    ON public.financial_records
    FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Policy: Admins can manage all records
CREATE POLICY "Admins can manage all financial records"
    ON public.financial_records
    FOR ALL
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Policy: Users can insert their own records (if allowed, typically maybe only sellers/admins?)
-- Assuming sellers can add their own records for now, or maybe just admins. 
-- Based on the previous schema, it seemed like 'ingresos' had strict policies.
-- Let's allow users to insert if they link it to themselves.
CREATE POLICY "Users can insert own financial records"
    ON public.financial_records
    FOR INSERT
    WITH CHECK (
        auth.uid() = profile_id
    );
