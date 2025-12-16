-- Migration: Fix Recursive Policies
-- Description: Fixes infinite recursion in RLS policies by using SECURITY DEFINER functions
-- Created: 2025-12-15

-- ============================================================================
-- PROFILES POLICIES
-- ============================================================================

-- Drop existing recursive policies
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can update all profiles" ON public.profiles;

-- Re-create using has_role() which is SECURITY DEFINER (bypasses RLS)
CREATE POLICY "Admins can view all profiles"
    ON public.profiles
    FOR SELECT
    USING (
        public.has_role('admin') OR public.has_role('superadmin')
    );

CREATE POLICY "Admins can update all profiles"
    ON public.profiles
    FOR UPDATE
    USING (
        public.has_role('admin') OR public.has_role('superadmin')
    );

-- ============================================================================
-- FINANCIAL RECORDS POLICIES
-- ============================================================================

-- Drop existing subquery policies (not recursive but inefficient compared to function)
DROP POLICY IF EXISTS "Admins can view all financial records" ON public.financial_records;
DROP POLICY IF EXISTS "Admins can manage all financial records" ON public.financial_records;

-- Re-create using has_role()
CREATE POLICY "Admins can view all financial records"
    ON public.financial_records
    FOR SELECT
    USING (
        public.has_role('admin') OR public.has_role('superadmin')
    );

CREATE POLICY "Admins can manage all financial records"
    ON public.financial_records
    FOR ALL
    USING (
        public.has_role('admin') OR public.has_role('superadmin')
    );
