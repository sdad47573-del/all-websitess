-- Migration: Seed Data
-- Description: Inserts initial test data for categories, menu, and platos
-- Created: 2025-12-01
-- Note: This is optional and can be used for development/testing

-- ============================================================================
-- SEED DATA: Categories
-- ============================================================================
INSERT INTO public.categories (name, slug, active) VALUES
    ('Bebidas', 'bebidas', true),
    ('Entrantes', 'entrantes', true),
    ('Platos Principales', 'platos-principales', true),
    ('Postres', 'postres', true),
    ('Menú Infantil', 'menu-infantil', true),
    ('Especialidades', 'especialidades', true);

-- ============================================================================
-- SEED DATA: Menu
-- ============================================================================
INSERT INTO public.menu (name, active, start_date, end_date) VALUES
    ('Menú del Día', true, NULL, NULL),
    ('Menú Fin de Semana', true, NULL, NULL),
    ('Carta de Vinos', true, NULL, NULL);

-- ============================================================================
-- SEED DATA: Platos (Dishes)
-- ============================================================================

-- Bebidas (category_id: 1)
INSERT INTO public.platos (name, description, price, category_id, active, allergens) VALUES
    ('Coca Cola', 'Refresco de cola', 2.50, 1, true, NULL),
    ('Fanta Naranja', 'Refresco de naranja', 2.50, 1, true, NULL),
    ('Agua Mineral', 'Botella de 50cl', 1.50, 1, true, NULL),
    ('Cerveza Caña', 'Cerveza de barril', 2.00, 1, true, '{"gluten": true}'),
    ('Vino Tinto Rioja', 'Copa de vino tinto', 3.50, 1, true, '{"sulfitos": true}');

-- Entrantes (category_id: 2)
INSERT INTO public.platos (name, description, price, category_id, active, allergens) VALUES
    ('Patatas Bravas', 'Patatas con salsa brava casera', 5.50, 2, true, '{"gluten": true}'),
    ('Calamares a la Romana', 'Anillas de calamar rebozadas', 8.00, 2, true, '{"gluten": true, "moluscos": true}'),
    ('Croquetas de Jamón', '6 unidades caseras', 6.50, 2, true, '{"gluten": true, "lacteos": true}'),
    ('Ensalada Mixta', 'Lechuga, tomate, cebolla, atún y huevo', 7.00, 2, true, '{"pescado": true, "huevo": true}'),
    ('Gazpacho Andaluz', 'Sopa fría de tomate y hortalizas', 5.00, 2, true, '{"gluten": true}');

-- Platos Principales (category_id: 3)
INSERT INTO public.platos (name, description, price, category_id, active, allergens) VALUES
    ('Paella Valenciana', 'Arroz con pollo y conejo', 12.00, 3, true, NULL),
    ('Hamburguesa Completa', 'Carne de vacuno, queso, bacon y huevo', 9.50, 3, true, '{"gluten": true, "lacteos": true, "huevo": true}'),
    ('Entrecot a la Pimienta', 'Carne de ternera con salsa', 16.00, 3, true, '{"lacteos": true}'),
    ('Salmón a la Plancha', 'Con guarnición de verduras', 14.00, 3, true, '{"pescado": true}'),
    ('Pizza Margarita', 'Tomate, mozzarella y orégano', 8.50, 3, true, '{"gluten": true, "lacteos": true}');

-- Postres (category_id: 4)
INSERT INTO public.platos (name, description, price, category_id, active, allergens) VALUES
    ('Tarta de Queso', 'Casera con mermelada de arándanos', 5.00, 4, true, '{"gluten": true, "lacteos": true, "huevo": true}'),
    ('Helado Variado', 'Dos bolas a elegir', 3.50, 4, true, '{"lacteos": true}'),
    ('Fruta del Tiempo', 'Pieza de fruta de temporada', 2.00, 4, true, NULL),
    ('Brownie con Helado', 'Bizcocho de chocolate y nueces', 5.50, 4, true, '{"gluten": true, "lacteos": true, "huevo": true, "frutos_secos": true}');

-- Menú Infantil (category_id: 5)
INSERT INTO public.platos (name, description, price, category_id, active, allergens) VALUES
    ('Macarrones con Tomate', 'Pasta con salsa de tomate y queso', 6.00, 5, true, '{"gluten": true, "lacteos": true}'),
    ('Nuggets de Pollo', 'Con patatas fritas', 6.50, 5, true, '{"gluten": true}');

-- Especialidades (category_id: 6)
INSERT INTO public.platos (name, description, price, category_id, active, allergens) VALUES
    ('Solomillo al Whisky', 'Especialidad de la casa', 15.00, 6, true, '{"gluten": true}');
