-- Fix: Update handle_new_user function to bypass RLS
-- Run this in Supabase SQL Editor to fix the user creation issue

-- Drop the existing trigger first
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Recreate the function with proper permissions
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER 
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    INSERT INTO public.profiles (id, full_name, role)
    VALUES (
        NEW.id,
        COALESCE(NEW.raw_user_meta_data->>'full_name', 'Usuario'),
        COALESCE((NEW.raw_user_meta_data->>'role')::user_role, 'seller')
    );
    RETURN NEW;
EXCEPTION
    WHEN others THEN
        -- Log error but don't fail user creation
        RAISE WARNING 'Error creating profile for user %: %', NEW.id, SQLERRM;
        RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Recreate the trigger
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_user();

-- Update the INSERT policy to allow the trigger function
DROP POLICY IF EXISTS "System can insert profiles" ON public.profiles;

CREATE POLICY "Allow profile creation"
    ON public.profiles
    FOR INSERT
    WITH CHECK (true);

COMMENT ON POLICY "Allow profile creation" ON public.profiles IS 'Allows profile creation via trigger or direct insert';
