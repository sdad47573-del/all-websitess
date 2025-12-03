-- Migration: Seed Vapers Data
-- Description: Populates the vapers table with initial inventory data
-- Created: 2025-12-03

-- Insert vaper products with initial quantities
INSERT INTO public.vapers (title, active) VALUES
    ('Hielo Negro Pitaya Fresa',true),
    ('Hielo Moras Arándano Azul',true),
    ('Frambuesa Azul',true),
    ('Arándano Azul Grosella Negra Hielo',true),
    ('Arándano Azul Cereza Cola',true),
    ('Arándano Azul Cereza Arándano Rojo',true),
    ('Arándano Azul Hielo',true),
    ('Menta Fresca',true),
    ('Doble Manzana',true),
    ('Explosión de Uva',true),
    ('Kiwi Maracuyá Guayaba',true),
    ('Limón Lima',true),
    ('Love 66',true),
    ('Frutos Mixtos',true),
    ('Melocoton Frutos del Bosque',true),
    ('Melocoton Mango Piña',true),
    ('Limonada Rosa',true),
    ('Frambuesa Sandía',true),
    ('Red Bull',true),
    ('Skittles',true),
    ('Fresa Hielo',true),
    ('Fresa Banana',true),
    ('Fresa Kiwi',true),
    ('Fresa Vainilla Cola',true),
    ('Fresa Sandía',true),
    ('Sueño de Verano',true),
    ('Triple Cereza',true),
    ('Sandía Hielo',true)
ON CONFLICT (title) DO NOTHING;

-- Seed Stock
INSERT INTO public.stock (vaper_id, amount)
SELECT id, 50
FROM public.vapers v
WHERE NOT EXISTS (SELECT 1 FROM public.stock s WHERE s.vaper_id = v.id);

-- Seed Sales
INSERT INTO public.sales (vaper_id, seller_id, price_per_unit, amount)
SELECT id, 'user_placeholder', 10.00, 5
FROM public.vapers
WHERE title = 'Hielo Negro Pitaya Fresa';

INSERT INTO public.sales (vaper_id, seller_id, price_per_unit, amount)
SELECT id, 'user_placeholder', 12.50, 2
FROM public.vapers
WHERE title = 'Menta Fresca';

INSERT INTO public.sales (vaper_id, seller_id, price_per_unit, amount)
SELECT id, 'user_placeholder', 15.00, 10
FROM public.vapers
WHERE title = 'Red Bull';
