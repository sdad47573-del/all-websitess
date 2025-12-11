CREATE TABLE public.buy (
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    eur NUMERIC NOT NULL,
    fecha DATE NOT NULL,
    label TEXT NOT NULL UNIQUE
);

CREATE TABLE public.buyedItems (
    id BIGSERIAL PRIMARY KEY,
    buy_id BIGINT NOT NULL REFERENCES public.buy(id) ON DELETE CASCADE,
    item_id BIGINT NOT NULL REFERENCES public.items(id) ON DELETE CASCADE,
    quantity INT NOT NULL
);

ALTER TABLE public.buy ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.buyedItems ENABLE ROW LEVEL SECURITY;

-- -- Buy policies
-- CREATE POLICY "Allow public read access to active buy"
--     ON public.buy
--     FOR SELECT
--     USING (active = true);

CREATE POLICY "Allow authenticated users full access to buy"
    ON public.buy
    FOR ALL
    USING (auth.role() = 'authenticated');

-- -- BuyedItems policies
-- CREATE POLICY "Allow public read access to active buyedItems"
--     ON public.buyedItems
--     FOR SELECT
--     USING (active = true);

CREATE POLICY "Allow authenticated users full access to buyedItems"
    ON public.buyedItems
    FOR ALL
    USING (auth.role() = 'authenticated');





-- ===========================================================
-- 3) Tabla BUY (compras)
-- ===========================================================
INSERT INTO buy (label, eur, fecha) VALUES
('Compra 1', 560,  TO_DATE('27/08/2025','DD/MM/YYYY')),
('Compra 2', 1080, TO_DATE('17/10/2025','DD/MM/YYYY')),
('Compra 3', 1020, TO_DATE('30/10/2025','DD/MM/YYYY')),
('Compra 4', 1080, TO_DATE('18/11/2025','DD/MM/YYYY'));

-- ===========================================================
-- 4) Insertar buyedItems (detalles)
-- ===========================================================
-- Compra 1 (id = 1)
INSERT INTO buyedItems (buy_id, item_id, quantity) VALUES
( (SELECT id FROM buy WHERE label='Compra 1'), (SELECT id FROM items WHERE title='Double Apple'), 10),
( (SELECT id FROM buy WHERE label='Compra 1'), (SELECT id FROM items WHERE title='Peach Mango Pineapple'), 10),
( (SELECT id FROM buy WHERE label='Compra 1'), (SELECT id FROM items WHERE title='Pink Lemonade'), 10),
( (SELECT id FROM buy WHERE label='Compra 1'), (SELECT id FROM items WHERE title='Raspberry Watermelon'), 10),
( (SELECT id FROM buy WHERE label='Compra 1'), (SELECT id FROM items WHERE title='Strawberry Ice'), 10),
( (SELECT id FROM buy WHERE label='Compra 1'), (SELECT id FROM items WHERE title='Strawberry Kiwi'), 10),
( (SELECT id FROM buy WHERE label='Compra 1'), (SELECT id FROM items WHERE title='cool mint'), 10),
( (SELECT id FROM buy WHERE label='Compra 1'), (SELECT id FROM items WHERE title='love 66'), 10),
( (SELECT id FROM buy WHERE label='Compra 1'), (SELECT id FROM items WHERE title='strawberry vanilla cola'), 20);

-- Compra 2 (id = 2)
INSERT INTO buyedItems (buy_id, item_id, quantity) VALUES
( (SELECT id FROM buy WHERE label='Compra 2'), (SELECT id FROM items WHERE title='Double Apple'), 20),
( (SELECT id FROM buy WHERE label='Compra 2'), (SELECT id FROM items WHERE title='Lemon Lime'), 10),
( (SELECT id FROM buy WHERE label='Compra 2'), (SELECT id FROM items WHERE title='Mixed Berry'), 10),
( (SELECT id FROM buy WHERE label='Compra 2'), (SELECT id FROM items WHERE title='Peach Mango Pineapple'), 20),
( (SELECT id FROM buy WHERE label='Compra 2'), (SELECT id FROM items WHERE title='Pink Lemonade'), 30),
( (SELECT id FROM buy WHERE label='Compra 2'), (SELECT id FROM items WHERE title='Raspberry Watermelon'), 20),
( (SELECT id FROM buy WHERE label='Compra 2'), (SELECT id FROM items WHERE title='Red Bull'), 10),
( (SELECT id FROM buy WHERE label='Compra 2'), (SELECT id FROM items WHERE title='Strawberry Banana'), 20),
( (SELECT id FROM buy WHERE label='Compra 2'), (SELECT id FROM items WHERE title='Strawberry Ice'), 20),
( (SELECT id FROM buy WHERE label='Compra 2'), (SELECT id FROM items WHERE title='Strawberry Kiwi'), 10),
( (SELECT id FROM buy WHERE label='Compra 2'), (SELECT id FROM items WHERE title='Watermelon Ice'), 10),
( (SELECT id FROM buy WHERE label='Compra 2'), (SELECT id FROM items WHERE title='cool mint'), 20);

-- Compra 3 (id = 3)
INSERT INTO buyedItems (buy_id, item_id, quantity) VALUES
( (SELECT id FROM buy WHERE label='Compra 3'), (SELECT id FROM items WHERE title='Blueberry Cherry Cranberry'), 10),
( (SELECT id FROM buy WHERE label='Compra 3'), (SELECT id FROM items WHERE title='Blueberry Ice'), 10),
( (SELECT id FROM buy WHERE label='Compra 3'), (SELECT id FROM items WHERE title='Double Apple'), 30),
( (SELECT id FROM buy WHERE label='Compra 3'), (SELECT id FROM items WHERE title='Kiwi Passion Fruit Guava'), 10),
( (SELECT id FROM buy WHERE label='Compra 3'), (SELECT id FROM items WHERE title='Lemon Lime'), 30),
( (SELECT id FROM buy WHERE label='Compra 3'), (SELECT id FROM items WHERE title='Peach Berry'), 10),
( (SELECT id FROM buy WHERE label='Compra 3'), (SELECT id FROM items WHERE title='Red Bull'), 10),
( (SELECT id FROM buy WHERE label='Compra 3'), (SELECT id FROM items WHERE title='Strawberry Ice'), 10),
( (SELECT id FROM buy WHERE label='Compra 3'), (SELECT id FROM items WHERE title='Strawberry Watermelon'), 10),
( (SELECT id FROM buy WHERE label='Compra 3'), (SELECT id FROM items WHERE title='Watermelon Ice'), 20),
( (SELECT id FROM buy WHERE label='Compra 3'), (SELECT id FROM items WHERE title='blackberry blueberry ice'), 10),
( (SELECT id FROM buy WHERE label='Compra 3'), (SELECT id FROM items WHERE title='cool mint'), 20),
( (SELECT id FROM buy WHERE label='Compra 3'), (SELECT id FROM items WHERE title='triple cherry'), 20);

-- Compra 4 (id = 4)
INSERT INTO buyedItems (buy_id, item_id, quantity) VALUES
( (SELECT id FROM buy WHERE label='Compra 4'), (SELECT id FROM items WHERE title='Black Ice Drangofruit Strawberry'), 10),
( (SELECT id FROM buy WHERE label='Compra 4'), (SELECT id FROM items WHERE title='Blueberry Blackcurrant Ice'), 10),
( (SELECT id FROM buy WHERE label='Compra 4'), (SELECT id FROM items WHERE title='Blueberry Cherry Cola'), 10),
( (SELECT id FROM buy WHERE label='Compra 4'), (SELECT id FROM items WHERE title='Blueberry Ice'), 10),
( (SELECT id FROM buy WHERE label='Compra 4'), (SELECT id FROM items WHERE title='Double Apple'), 10),
( (SELECT id FROM buy WHERE label='Compra 4'), (SELECT id FROM items WHERE title='Lemon Lime'), 20),
( (SELECT id FROM buy WHERE label='Compra 4'), (SELECT id FROM items WHERE title='Mixed Berry'), 10),
( (SELECT id FROM buy WHERE label='Compra 4'), (SELECT id FROM items WHERE title='Peach Mango Pineapple'), 10),
( (SELECT id FROM buy WHERE label='Compra 4'), (SELECT id FROM items WHERE title='Pink Lemonade'), 10),
( (SELECT id FROM buy WHERE label='Compra 4'), (SELECT id FROM items WHERE title='Raspberry Watermelon'), 10),
( (SELECT id FROM buy WHERE label='Compra 4'), (SELECT id FROM items WHERE title='Red Bull'), 10),
( (SELECT id FROM buy WHERE label='Compra 4'), (SELECT id FROM items WHERE title='Strawberry Banana'), 10),
( (SELECT id FROM buy WHERE label='Compra 4'), (SELECT id FROM items WHERE title='Strawberry Ice'), 10),
( (SELECT id FROM buy WHERE label='Compra 4'), (SELECT id FROM items WHERE title='Strawberry Kiwi'), 10),
( (SELECT id FROM buy WHERE label='Compra 4'), (SELECT id FROM items WHERE title='Watermelon Ice'), 10),
( (SELECT id FROM buy WHERE label='Compra 4'), (SELECT id FROM items WHERE title='cool mint'), 10),
( (SELECT id FROM buy WHERE label='Compra 4'), (SELECT id FROM items WHERE title='grape burst'), 10),
( (SELECT id FROM buy WHERE label='Compra 4'), (SELECT id FROM items WHERE title='love 66'), 10),
( (SELECT id FROM buy WHERE label='Compra 4'), (SELECT id FROM items WHERE title='strawberry vanilla cola'), 10);