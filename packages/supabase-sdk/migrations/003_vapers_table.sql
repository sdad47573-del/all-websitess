-- Migration: Vapers Table
-- Description: Creates the vapers table for storing vaper inventory
-- Created: 2025-12-03

-- ============================================================================
-- TABLE: vapers
-- Description: Stores vaper products with their quantities
-- ============================================================================
DROP TABLE IF EXISTS public.vapers CASCADE;

CREATE TABLE public.vapers (
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    title TEXT NOT NULL UNIQUE,
    es_title TEXT NOT NULL UNIQUE,
    active BOOLEAN NOT NULL DEFAULT true,
    amount NUMERIC NOT NULL DEFAULT 0,
    
    -- Constraints
    CONSTRAINT vapers_title_not_empty CHECK (LENGTH(TRIM(title)) > 0),
    CONSTRAINT vapers_es_title_not_empty CHECK (LENGTH(TRIM(es_title)) > 0),
    CONSTRAINT stock_amount_positive CHECK (amount >= 0)
);

-- Add comments to table
COMMENT ON TABLE public.vapers IS 'Vaper products inventory with quantities';
COMMENT ON COLUMN public.vapers.title IS 'Unique name/title of the vaper product';
COMMENT ON COLUMN public.vapers.active IS 'Whether this vaper product is currently active and should be displayed';


-- ============================================================================
-- TABLE: sales
-- Description: Stores vaper products with their quantities
-- ============================================================================
DROP TABLE IF EXISTS public.sales CASCADE;

CREATE TABLE public.sales (
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    vaper_id BIGINT NOT NULL REFERENCES public.vapers(id) ON DELETE CASCADE,
    seller_id TEXT NOT NULL,
    concept TEXT NOT NULL ,
    price_per_unit NUMERIC NOT NULL,
    payment NUMERIC ,
    -- buyer_id TEXT,
    amount NUMERIC NOT NULL,
    active BOOLEAN NOT NULL DEFAULT true,
    
    -- Constraints
    CONSTRAINT sales_price_positive CHECK (price_per_unit > 0),
    CONSTRAINT sales_payment_positive CHECK (payment >= 0),
    CONSTRAINT sales_amount_positive CHECK (amount > 0),
    CONSTRAINT sales_concept_not_empty CHECK (LENGTH(TRIM(concept)) > 0)
);

-- Add comments to table
COMMENT ON TABLE public.sales IS 'Sales transactions for vaper products';
COMMENT ON COLUMN public.sales.vaper_id IS 'Foreign key reference to vapers table';
COMMENT ON COLUMN public.sales.seller_id IS 'Identifier of the seller';
COMMENT ON COLUMN public.sales.price_per_unit IS 'Price per unit for this sale';
COMMENT ON COLUMN public.sales.payment IS 'Payment received for this sale';
COMMENT ON COLUMN public.sales.amount IS 'Quantity sold in this transaction';
COMMENT ON COLUMN public.sales.concept IS 'Concept of the sale';

-- ============================================================================
-- INDEXES
-- Description: Indexes for improved query performance
-- ============================================================================

-- Vapers indexes
CREATE INDEX IF NOT EXISTS idx_vapers_active ON public.vapers(active) WHERE active = true;
CREATE INDEX IF NOT EXISTS idx_vapers_title ON public.vapers(title);

-- ============================================================================
-- ROW LEVEL SECURITY (RLS)
-- Description: Enable RLS and create policies for public read access
-- ============================================================================

-- Enable RLS on vapers table
ALTER TABLE public.vapers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sales ENABLE ROW LEVEL SECURITY;

-- Vapers policies
CREATE POLICY "Allow public read access to active vapers"
    ON public.vapers
    FOR SELECT
    USING (active = true);

CREATE POLICY "Allow authenticated users full access to vapers"
    ON public.vapers
    FOR ALL
    USING (auth.role() = 'authenticated');
