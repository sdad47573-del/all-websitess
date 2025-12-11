create or replace function get_items_totals()
returns table (
  item_id bigint,
  title text,
  es_title text,
  image_url text,
  active boolean,
  amount numeric,
  total_quantity int
)
language sql
as $$
  select 
    i.id as item_id,
    i.title,
    i.es_title,
    i.image_url,
    i.active,
    i.amount,
    sum(b.quantity) as total_quantity
  from public.buyedItems b
  join public.items i on i.id = b.item_id
  group by 
    i.id, i.title, i.es_title, i.image_url, i.active, i.amount
  order by total_quantity desc;
$$;
