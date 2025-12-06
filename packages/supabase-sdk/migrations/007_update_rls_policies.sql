-- Migration: Update RLS Policies for Role-Based Access
-- Description: Updates RLS policies on items and sales tables to use role-based permissions
-- Created: 2025-12-06

-- ============================================================================
-- UPDATE POLICIES: items table
-- Description: Update policies to use role-based access control
-- ============================================================================

-- Drop old policies
DROP POLICY IF EXISTS "Allow authenticated users full access to items" ON public.items;

-- Create new role-based policies
CREATE POLICY "Anyone can view active items"
    ON public.items
    FOR SELECT
    USING (active = true);

CREATE POLICY "Admins can insert items"
    ON public.items
    FOR INSERT
    WITH CHECK (public.has_role('admin'));

CREATE POLICY "Admins can update items"
    ON public.items
    FOR UPDATE
    USING (public.has_role('admin'));

CREATE POLICY "Admins can delete items"
    ON public.items
    FOR DELETE
    USING (public.has_role('admin'));

-- ============================================================================
-- UPDATE POLICIES: sales table
-- Description: Update policies to use role-based access control
-- ============================================================================

-- Drop old policies if they exist
DROP POLICY IF EXISTS "Allow authenticated users full access to sales" ON public.sales;

-- Create new role-based policies
CREATE POLICY "Authenticated users can view sales"
    ON public.sales
    FOR SELECT
    USING (auth.uid() IS NOT NULL);

CREATE POLICY "Sellers and admins can create sales"
    ON public.sales
    FOR INSERT
    WITH CHECK (
        public.has_role('admin') OR public.has_role('seller')
    );

CREATE POLICY "Admins can update sales"
    ON public.sales
    FOR UPDATE
    USING (public.has_role('admin'));

CREATE POLICY "Admins can delete sales"
    ON public.sales
    FOR DELETE
    USING (public.has_role('admin'));

-- ============================================================================
-- COMMENTS
-- Description: Add documentation for the new policies
-- ============================================================================

COMMENT ON POLICY "Anyone can view active items" ON public.items IS 'Public read access to active items';
COMMENT ON POLICY "Admins can insert items" ON public.items IS 'Only admins can add new items';
COMMENT ON POLICY "Admins can update items" ON public.items IS 'Only admins can modify items';
COMMENT ON POLICY "Admins can delete items" ON public.items IS 'Only admins can delete items';

COMMENT ON POLICY "Authenticated users can view sales" ON public.sales IS 'All authenticated users can view sales';
COMMENT ON POLICY "Sellers and admins can create sales" ON public.sales IS 'Sellers and admins can create new sales';
COMMENT ON POLICY "Admins can update sales" ON public.sales IS 'Only admins can modify sales';
COMMENT ON POLICY "Admins can delete sales" ON public.sales IS 'Only admins can delete sales';
