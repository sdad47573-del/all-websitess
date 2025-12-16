-- Migration: Seed System User
-- Description: Seeds a system user in auth.users and profiles
-- Created: 2025-12-15

-- ============================================================================
-- SEED DATA: System User
-- Description: Create a system user in auth.users and profiles
-- ============================================================================
DO $$
DECLARE
    system_uid UUID := '00000000-0000-0000-0000-000000000000';
    system_email TEXT := 'system@internal.localhost';
BEGIN
    -- Insert into auth.users if not exists
    IF NOT EXISTS (SELECT 1 FROM auth.users WHERE id = system_uid) THEN
        INSERT INTO auth.users (
            id,
            instance_id,
            email,
            encrypted_password,
            email_confirmed_at,
            raw_app_meta_data,
            raw_user_meta_data,
            created_at,
            updated_at,
            role,
            aud,
            confirmation_token
        ) VALUES (
            system_uid,
            '00000000-0000-0000-0000-000000000000',
            system_email,
            extensions.crypt('system-password-placeholder', extensions.gen_salt('bf')), -- Placeholder password, user cannot login normally
            NOW(),
            '{"provider": "email", "providers": ["email"]}',
            '{"full_name": "System"}',
            NOW(),
            NOW(),
            'authenticated',
            'authenticated',
            ''
        );
    END IF;

    -- Insert into profiles (should be handled by trigger, but we force it just in case or update role)
    -- The trigger 'on_auth_user_created' might create it with 'seller' role.
    -- We need to ensure it is 'superadmin'.
    
    INSERT INTO public.profiles (id, full_name, role)
    VALUES (system_uid, 'System', 'superadmin')
    ON CONFLICT (id) DO UPDATE
    SET role = 'superadmin', full_name = 'System';

END $$;
