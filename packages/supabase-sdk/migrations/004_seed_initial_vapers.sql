-- Migration: Seed Items Data
-- Description: Populates the items table with initial inventory data
-- Created: 2025-12-03

-- Insert item products with initial quantities
INSERT INTO public.items (title,es_title, active, amount) VALUES
    ('Black Ice Drangofruit Strawberry','Regaliz-Negro Pitaya Fresa Helada',true,0),
    ('blackberry blueberry ice','Moras Arándano-Azul Helada',true,0),
    ('Blueberry Blackcurrant Ice','Arándano-Azul Baya-Negra Helada',true,0),
    ('Blue Razz','Frambuesa Azul',true,0),
    ('Blueberry Cherry Cola','Coca-Cola de Arándano-Azul Cereza',true,0),
    ('Blueberry Cherry Cranberry','Arándano-Azul Cereza Arándano-Rojo',true,0),
    ('Blueberry Ice','Arándano-Azul Helado',true,0),
    ('cool mint','Chicle Menta',true,0),
    ('Double Apple','Doble Manzana',true,0),
    ('grape burst','Explosión de Uva',true,0),
    ('Kiwi Passion Fruit Guava','Kiwi Maracuyá Guayaba',true,0),
    ('Lemon Lime','Lima Limón',true,0),
    ('love 66','Love 66',true,0),
    ('Mixed Berry','Frambuesa Arándano Cereza Mora Fresa',true,0),
    ('Peach Berry','Melocoton Frutos del Bosque',true,0),
    ('Peach Mango Pineapple','Melocoton Mango Piña',true,0),
    ('Pink Lemonade','Limonada Rosa',true,0),
    ('Raspberry Watermelon','Frambuesa Sandía',true,0),
    ('Red Bull','Red Bull',true,0),
    ('Skittles','Skittles',true,0),
    ('Strawberry Ice','Fresa Helada',true,0),
    ('Strawberry Banana','Fresa Banana',true,0),
    ('Strawberry Kiwi','Fresa Kiwi',true,0),
    ('strawberry vanilla cola','Coca-Cola de Fresa Vainilla',true,0),
    ('Strawberry Watermelon','Fresa Sandía',true,0),
    ('Summer Dream','Sueño de Verano',true,0),
    ('triple cherry','Triple Cereza',true,0),
    ('Watermelon Ice','Sandía Helada',true,0)
ON CONFLICT (title) DO NOTHING;
