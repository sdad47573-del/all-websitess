-- Migration: Items Table
-- Description: Creates the items table for storing item inventory
-- Created: 2025-12-03

-- ============================================================================
-- TABLE: items
-- Description: Stores item products with their quantities
-- ============================================================================
DROP TABLE IF EXISTS public.items CASCADE;

CREATE TABLE public.items (
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    title TEXT NOT NULL UNIQUE,
    es_title TEXT NOT NULL UNIQUE,
    image_url TEXT,
    active BOOLEAN NOT NULL DEFAULT true,
    amount NUMERIC NOT NULL DEFAULT 0,
    
    -- Constraints
    CONSTRAINT items_title_not_empty CHECK (LENGTH(TRIM(title)) > 0),
    CONSTRAINT items_es_title_not_empty CHECK (LENGTH(TRIM(es_title)) > 0),
    CONSTRAINT stock_amount_positive CHECK (amount >= 0)
);

-- Add comments to table
COMMENT ON TABLE public.items IS 'Items products inventory with quantities';
COMMENT ON COLUMN public.items.title IS 'Unique name/title of the item product';
COMMENT ON COLUMN public.items.es_title IS 'Spanish translation of the item title';
COMMENT ON COLUMN public.items.image_url IS 'URL of the item product image (typically from Supabase Storage)';
COMMENT ON COLUMN public.items.active IS 'Whether this item product is currently active and should be displayed';


-- ============================================================================
-- TABLE: sales
-- Description: Stores item products with their quantities
-- ============================================================================
DROP TABLE IF EXISTS public.sales CASCADE;

CREATE TABLE public.sales (
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    item_id BIGINT NOT NULL REFERENCES public.items(id) ON DELETE CASCADE,
    seller_id TEXT NOT NULL,
    concept TEXT NOT NULL ,
    price_per_unit NUMERIC NOT NULL,
    payment NUMERIC ,
    -- buyer_id TEXT,
    amount NUMERIC NOT NULL,
    active BOOLEAN NOT NULL DEFAULT true,
    
    -- Constraints
    CONSTRAINT sales_price_positive CHECK (price_per_unit >= 0),
    CONSTRAINT sales_payment_positive CHECK (payment >= 0),
    CONSTRAINT sales_amount_positive CHECK (amount > 0)
    -- CONSTRAINT sales_concept_not_empty CHECK (LENGTH(TRIM(concept)) > 0)
);

-- Add comments to table
COMMENT ON TABLE public.sales IS 'Sales transactions for item products';
COMMENT ON COLUMN public.sales.item_id IS 'Foreign key reference to items table';
COMMENT ON COLUMN public.sales.seller_id IS 'Identifier of the seller';
COMMENT ON COLUMN public.sales.price_per_unit IS 'Price per unit for this sale';
COMMENT ON COLUMN public.sales.payment IS 'Payment received for this sale';
COMMENT ON COLUMN public.sales.amount IS 'Quantity sold in this transaction';
COMMENT ON COLUMN public.sales.concept IS 'Concept of the sale';

-- ============================================================================
-- INDEXES
-- Description: Indexes for improved query performance
-- ============================================================================

-- Items indexes
CREATE INDEX IF NOT EXISTS idx_items_active ON public.items(active) WHERE active = true;
CREATE INDEX IF NOT EXISTS idx_items_title ON public.items(title);

-- ============================================================================
-- ROW LEVEL SECURITY (RLS)
-- Description: Enable RLS and create policies for public read access
-- ============================================================================

-- Enable RLS on items table
ALTER TABLE public.items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sales ENABLE ROW LEVEL SECURITY;

-- Items policies
CREATE POLICY "Allow public read access to active items"
    ON public.items
    FOR SELECT
    USING (active = true);

CREATE POLICY "Allow authenticated users full access to items"
    ON public.items
    FOR ALL
    USING (auth.role() = 'authenticated');

-- ============================================================================
-- TRIGGERS
-- Description: Automatic inventory management
-- ============================================================================

-- Function to decrease item amount when a sale is created
CREATE OR REPLACE FUNCTION decrease_item_amount_on_sale()
RETURNS TRIGGER AS $$
BEGIN
    -- Decrease the item amount by the sale amount
    UPDATE public.items
    SET amount = amount - NEW.amount
    WHERE id = NEW.item_id;
    
    -- Check if the update resulted in negative stock
    IF (SELECT amount FROM public.items WHERE id = NEW.item_id) < 0 THEN
        RAISE EXCEPTION 'Insufficient stock for item_id %. Available: %, Requested: %',
            NEW.item_id,
            (SELECT amount + NEW.amount FROM public.items WHERE id = NEW.item_id),
            NEW.amount;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically decrease item amount on sale creation
CREATE TRIGGER trigger_decrease_item_amount
    AFTER INSERT ON public.sales
    FOR EACH ROW
    EXECUTE FUNCTION decrease_item_amount_on_sale();

-- Add comment to trigger
COMMENT ON FUNCTION decrease_item_amount_on_sale() IS 'Automatically decreases item amount when a sale is created and validates stock availability';
