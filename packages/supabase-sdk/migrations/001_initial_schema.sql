-- Migration: Initial Schema
-- Description: Creates the initial database schema with categories, menu, and platos tables
-- Created: 2025-12-01

-- Enable UUID extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- TABLE: categories
-- Description: Stores food/drink categories for menu organization
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.categories (
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    active BOOLEAN NOT NULL DEFAULT true,
    
    -- Constraints
    CONSTRAINT categories_name_not_empty CHECK (LENGTH(TRIM(name)) > 0),
    CONSTRAINT categories_slug_not_empty CHECK (LENGTH(TRIM(slug)) > 0)
);

-- Add comment to table
COMMENT ON TABLE public.categories IS 'Categories for organizing menu items (e.g., Bebidas, Entrantes, Postres)';
COMMENT ON COLUMN public.categories.slug IS 'URL-friendly unique identifier for the category';
COMMENT ON COLUMN public.categories.active IS 'Whether this category is currently active and should be displayed';

-- ============================================================================
-- TABLE: menu
-- Description: Stores different menu types (daily menu, weekend menu, etc.)
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.menu (
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    name TEXT NOT NULL,
    active BOOLEAN NOT NULL DEFAULT true,
    start_date TIMESTAMPTZ,
    end_date TIMESTAMPTZ,
    
    -- Constraints
    CONSTRAINT menu_name_not_empty CHECK (LENGTH(TRIM(name)) > 0),
    CONSTRAINT menu_valid_date_range CHECK (
        (start_date IS NULL AND end_date IS NULL) OR
        (start_date IS NOT NULL AND end_date IS NOT NULL AND end_date > start_date)
    )
);

-- Add comments to table
COMMENT ON TABLE public.menu IS 'Different menu types (e.g., daily menu, weekend specials, wine list)';
COMMENT ON COLUMN public.menu.start_date IS 'Optional start date for seasonal or time-limited menus';
COMMENT ON COLUMN public.menu.end_date IS 'Optional end date for seasonal or time-limited menus';

-- ============================================================================
-- TABLE: platos
-- Description: Stores individual dishes/items with pricing and allergen info
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.platos (
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    name TEXT NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL,
    image_url TEXT,
    category_id BIGINT,
    active BOOLEAN NOT NULL DEFAULT true,
    allergens JSONB,
    
    -- Constraints
    CONSTRAINT platos_name_not_empty CHECK (LENGTH(TRIM(name)) > 0),
    CONSTRAINT platos_price_positive CHECK (price >= 0),
    CONSTRAINT platos_category_fk FOREIGN KEY (category_id) 
        REFERENCES public.categories(id) 
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

-- Add comments to table
COMMENT ON TABLE public.platos IS 'Individual dishes and menu items with pricing and allergen information';
COMMENT ON COLUMN public.platos.price IS 'Price in euros (or local currency)';
COMMENT ON COLUMN public.platos.allergens IS 'JSON object containing allergen information (e.g., {"gluten": true, "lacteos": true})';
COMMENT ON COLUMN public.platos.category_id IS 'Foreign key reference to categories table';

-- ============================================================================
-- INDEXES
-- Description: Indexes for improved query performance
-- ============================================================================

-- Categories indexes
CREATE INDEX IF NOT EXISTS idx_categories_active ON public.categories(active) WHERE active = true;
CREATE INDEX IF NOT EXISTS idx_categories_slug ON public.categories(slug);

-- Menu indexes
CREATE INDEX IF NOT EXISTS idx_menu_active ON public.menu(active) WHERE active = true;
CREATE INDEX IF NOT EXISTS idx_menu_dates ON public.menu(start_date, end_date) WHERE start_date IS NOT NULL;

-- Platos indexes
CREATE INDEX IF NOT EXISTS idx_platos_category_id ON public.platos(category_id);
CREATE INDEX IF NOT EXISTS idx_platos_active ON public.platos(active) WHERE active = true;
CREATE INDEX IF NOT EXISTS idx_platos_category_active ON public.platos(category_id, active) WHERE active = true;
CREATE INDEX IF NOT EXISTS idx_platos_allergens ON public.platos USING GIN(allergens) WHERE allergens IS NOT NULL;

-- ============================================================================
-- ROW LEVEL SECURITY (RLS)
-- Description: Enable RLS and create policies for public read access
-- ============================================================================

-- Enable RLS on all tables
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.menu ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.platos ENABLE ROW LEVEL SECURITY;

-- Categories policies
CREATE POLICY "Allow public read access to active categories"
    ON public.categories
    FOR SELECT
    USING (active = true);

CREATE POLICY "Allow authenticated users full access to categories"
    ON public.categories
    FOR ALL
    USING (auth.role() = 'authenticated');

-- Menu policies
CREATE POLICY "Allow public read access to active menus"
    ON public.menu
    FOR SELECT
    USING (active = true);

CREATE POLICY "Allow authenticated users full access to menu"
    ON public.menu
    FOR ALL
    USING (auth.role() = 'authenticated');

-- Platos policies
CREATE POLICY "Allow public read access to active platos"
    ON public.platos
    FOR SELECT
    USING (active = true);

CREATE POLICY "Allow authenticated users full access to platos"
    ON public.platos
    FOR ALL
    USING (auth.role() = 'authenticated');

-- ============================================================================
-- FUNCTIONS
-- Description: Utility functions for common operations
-- ============================================================================

-- Function to automatically update updated_at timestamp (if you want to add this field later)
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

COMMENT ON FUNCTION public.update_updated_at_column() IS 'Trigger function to automatically update updated_at timestamp';
