CREATE OR REPLACE FUNCTION public.group_by_day_concept_with_items()
RETURNS TABLE(
  day date,
  concept text,
  total_amount int,
  total_payment numeric,
  total_price numeric,
  items json
)
AS $$
  SELECT
    DATE(s.created_at) AS day,
    s.concept,
    SUM(s.amount)        AS total_amount,
    SUM(s.payment)       AS total_payment,
    SUM(s.price_per_unit * s.amount) AS total_price,
    JSON_AGG(
      JSON_BUILD_OBJECT(
        'sale_id', s.id,
        'item_id', i.id,
        'item_title', i.title,
        'seller_id', s.seller_id,
        'amount', s.amount,
        'payment', s.payment,
        'price_per_unit', s.price_per_unit,
        'created_at', s.created_at
      )
    ) AS items
  FROM sales s
  LEFT JOIN items i ON i.id = s.item_id
  GROUP BY DATE(s.created_at), s.concept
  ORDER BY DATE(s.created_at) DESC, s.concept;
$$ LANGUAGE sql STABLE;
