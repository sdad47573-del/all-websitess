create or replace function get_items_stock()
returns table (
  item_id bigint,
  title text,
  es_title text,
  image_url text,
  active boolean,
  amount numeric,
  total_buyed numeric,
  total_sold numeric,
  stock_final numeric
)
language sql
as $$
  with buyed AS (
    SELECT item_id, SUM(quantity) AS total_buyed
    FROM public.buyedItems
    GROUP BY item_id
  ),
  sold AS (
    SELECT item_id, SUM(amount) AS total_sold
    FROM public.sales
    WHERE active = true
    GROUP BY item_id
  )
  SELECT 
    i.id AS item_id,
    i.title,
    i.es_title,
    i.image_url,
    i.active,
    i.amount,
    COALESCE(b.total_buyed, 0) AS total_buyed,
    COALESCE(s.total_sold, 0) AS total_sold,

    -- 🟦 STOCK FINAL CORRECTO
    (COALESCE(b.total_buyed, 0) 
    - COALESCE(s.total_sold, 0)
    - i.amount) AS stock_final

  FROM public.items i
  LEFT JOIN buyed b ON b.item_id = i.id
  LEFT JOIN sold s ON s.item_id = i.id
  ORDER BY stock_final DESC;
$$;
