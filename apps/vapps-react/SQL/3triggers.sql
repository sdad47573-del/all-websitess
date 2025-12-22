-- 1️⃣ Crear la función trigger
CREATE OR REPLACE FUNCTION public.decrease_item_amount_on_sale()
RETURNS trigger AS $$
DECLARE
    current_amount integer;
BEGIN
    -- obtener stock actual
    SELECT amount INTO current_amount
    FROM public.items
    WHERE id = NEW.item_id;

    IF current_amount IS NULL THEN
        RAISE EXCEPTION 'Item % no existe', NEW.item_id;
    END IF;

    -- verificar stock
    IF current_amount < NEW.amount THEN
        RAISE EXCEPTION 'Stock insuficiente para item %. Disponible: %, solicitado: %',
            NEW.item_id, current_amount, NEW.amount;
    END IF;

    -- actualizar stock
    UPDATE public.items
    SET amount = amount - NEW.amount
    WHERE id = NEW.item_id;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 2️⃣ Crear el trigger que llama a la función
-- Supongamos que tenemos una tabla 'sales' donde se registran las ventas
CREATE TRIGGER trg_decrease_item_on_sale
BEFORE INSERT ON public.sales
FOR EACH ROW
EXECUTE FUNCTION public.decrease_item_amount_on_sale();


-- 1️⃣ Crear la función trigger
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
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

-- 2️⃣ Crear el trigger que llama a la función
CREATE TRIGGER trg_handle_new_user
AFTER INSERT ON auth.users
FOR EACH ROW
EXECUTE FUNCTION public.handle_new_user();

-- 1️⃣ Crear la función trigger
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS trigger AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 2️⃣ Crear el trigger que llama a la función
-- Supongamos que queremos aplicarlo a la tabla 'items'
CREATE TRIGGER trg_handle_updated_at
BEFORE UPDATE ON public.items
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

