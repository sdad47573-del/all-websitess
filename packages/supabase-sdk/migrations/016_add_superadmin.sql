-- Migration: Add Superadmin Role
-- Description: Adds 'superadmin' to user_role enum. Seeding is moved to 017 to avoid transaction errors.
-- Created: 2025-12-15

-- ============================================================================
-- ENUM UPDATE: user_role
-- Description: Add 'superadmin' to user_role enum
-- ============================================================================
ALTER TYPE user_role ADD VALUE IF NOT EXISTS 'superadmin';
