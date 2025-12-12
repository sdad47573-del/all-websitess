CREATE OR REPLACE FUNCTION public.get_top_selling_item_40_days()
RETURNS TABLE (
  item_id BIGINT,
  title TEXT,
  es_title TEXT,
  image_url TEXT,
  active BOOLEAN,
  total_units_sold NUMERIC,
  total_revenue NUMERIC
) AS $$
  SELECT 
  i.id AS item_id,
  i.title,
  i.es_title,
  i.image_url,
  i.active,
  
  SUM(s.amount) AS total_units_sold,
  SUM(s.amount * s.price_per_unit) AS total_revenue

FROM public.sales s
JOIN public.items i ON i.id = s.item_id
WHERE 
  s.created_at >= NOW() - INTERVAL '40 days'
  AND s.active = true
GROUP BY 
  i.id, i.title, i.es_title, i.image_url, i.active
ORDER BY 
  total_units_sold DESC
LIMIT 1;

$$ LANGUAGE sql STABLE;
