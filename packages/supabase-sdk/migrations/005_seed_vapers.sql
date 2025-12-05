-- Migration: Seed Items Data
-- Description: Populates the items table with initial inventory data
-- Created: 2025-12-03

-- Insert item products with initial quantities
INSERT INTO public.items (title,es_title, active, amount) VALUES
    ('Black Ice Drangofruit Strawberry','Regaliz-Negro Pitaya Fresa Helada',true,50),
    ('blackberry blueberry ice','Moras Arándano-Azul Helada',true,50),
    ('Blueberry Blackcurrant Ice','Arándano-Azul Baya-Negra Helada',true,50),
    ('Blue Razz','Frambuesa Azul',true,50),
    ('Blueberry Cherry Cola','Coca-Cola de Arándano-Azul Cereza',true,50),
    ('Blueberry Cherry Cranberry','Arándano-Azul Cereza Arándano-Rojo',true,50),
    ('Blueberry Ice','Arándano-Azul Helado',true,50),
    ('cool mint','Chicle Menta',true,50),
    ('Double Apple','Doble Manzana',true,50),
    ('grape burst','Explosión de Uva',true,50),
    ('Kiwi Passion Fruit Guava','Kiwi Maracuyá Guayaba',true,50),
    ('Lemon Lime','Lima Limón',true,50),
    ('love 66','Love 66',true,50),
    ('Mixed Berry','Frambuesa Arándano Cereza Mora Fresa',true,50),
    ('Peach Berry','Melocoton Frutos del Bosque',true,50),
    ('Peach Mango Pineapple','Melocoton Mango Piña',true,50),
    ('Pink Lemonade','Limonada Rosa',true,50),
    ('Raspberry Watermelon','Frambuesa Sandía',true,50),
    ('Red Bull','Red Bull',true,50),
    ('Skittles','Skittles',true,50),
    ('Strawberry Ice','Fresa Helada',true,50),
    ('Strawberry Banana','Fresa Banana',true,50),
    ('Strawberry Kiwi','Fresa Kiwi',true,50),
    ('strawberry vanilla cola','Coca-Cola de Fresa Vainilla',true,50),
    ('Strawberry Watermelon','Fresa Sandía',true,50),
    ('Summer Dream','Sueño de Verano',true,50),
    ('triple cherry','Triple Cereza',true,50),
    ('Watermelon Ice','Sandía Helada',true,50)
ON CONFLICT (title) DO NOTHING;

-- Seed Sales
INSERT INTO public.sales (item_id, seller_id, price_per_unit, amount,concept)
SELECT id, 'user_placeholder', 10.00, 5,'Niño lolo'
FROM public.items
WHERE es_title = 'Hielo Negro Pitaya Fresa';

INSERT INTO public.sales (item_id, seller_id, price_per_unit, amount,concept)
SELECT id, 'user_placeholder', 12.50, 2,'Bolero'
FROM public.items
WHERE es_title = 'Menta Fresca';

INSERT INTO public.sales (item_id, seller_id, price_per_unit, amount,concept)
SELECT id, 'user_placeholder', 15.00, 10,'Venta ismael'
FROM public.items
WHERE es_title = 'Red Bull';
