CREATE INDEX IF NOT EXISTS idx_buyeditems_itemid ON public.buyedItems(item_id);
CREATE INDEX IF NOT EXISTS idx_sales_itemid_active ON public.sales(item_id, active);

DROP FUNCTION get_items_stock();

CREATE OR REPLACE FUNCTION public.get_items_stock()
RETURNS TABLE (
    item_id bigint,
    title text,
    es_title text,
    brand text,
    image_url text,
    active boolean,
    amount integer,
    total_buyed integer,
    total_sold integer,
    stock_final integer
)
LANGUAGE sql
AS $$
SELECT 
    i.id AS item_id,
    i.title,
    i.es_title,
    i.brand,
    i.image_url,
    i.active,
    i.amount,
    COALESCE(b.total_buyed, 0) AS total_buyed,
    COALESCE(s.total_sold, 0) AS total_sold,
    (COALESCE(b.total_buyed, 0) - COALESCE(s.total_sold, 0) - i.amount) AS stock_final
FROM public.items i
LEFT JOIN (
    SELECT item_id, SUM(quantity) AS total_buyed
    FROM public.buyedItems
    GROUP BY item_id
) b ON b.item_id = i.id
LEFT JOIN (
    SELECT item_id, SUM(amount) AS total_sold
    FROM public.sales
    WHERE active = true
    GROUP BY item_id
) s ON s.item_id = i.id
ORDER BY stock_final DESC;
$$;



CREATE OR REPLACE FUNCTION public.get_items_totals()
RETURNS TABLE (
    item_id bigint,
    title text,
    es_title text,
    brand text,
    image_url text,
    active boolean,
    amount integer,
    total_quantity bigint
)
LANGUAGE sql
AS $$
SELECT 
    i.id AS item_id,
    i.title,
    i.es_title,
    i.brand,
    i.image_url,
    i.active,
    i.amount,
    SUM(b.quantity) AS total_quantity
FROM public.buyedItems b
JOIN public.items i ON i.id = b.item_id
GROUP BY 
    i.id,
    i.title,
    i.es_title,
    i.brand,
    i.image_url,
    i.active,
    i.amount
ORDER BY total_quantity DESC;
$$;



CREATE OR REPLACE FUNCTION public.get_top_selling_item_40_days()
RETURNS TABLE (
    item_id bigint,
    title text,
    es_title text,
    image_url text,
    active boolean,
    total_units_sold bigint,
    total_revenue numeric
)
LANGUAGE sql
AS $$
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
    i.id,
    i.title,
    i.es_title,
    i.image_url,
    i.active
ORDER BY 
    total_units_sold DESC
LIMIT 1;
$$;

CREATE OR REPLACE FUNCTION public.get_user_role()
RETURNS user_role
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    RETURN (
        SELECT role
        FROM public.profiles
        WHERE id = auth.uid()
    );
END;
$$;

DROP FUNCTION IF EXISTS group_by_day_concept_with_items();

CREATE OR REPLACE FUNCTION public.group_by_day_concept_with_items()
RETURNS TABLE (
    day date,
    concept text,
    brand text,
    total_amount bigint,
    total_payment numeric,
    total_price numeric,
    items json
)
LANGUAGE sql
AS $$
SELECT
    DATE(s.created_at) AS day,
    s.concept,
    i.brand AS brand,
    SUM(s.amount) AS total_amount,
    SUM(s.payment) AS total_payment,
    SUM(s.price_per_unit * s.amount) AS total_price,
    JSON_AGG(
        JSON_BUILD_OBJECT(
            'sale_id', s.id,
            'item_id', i.id,
            'item_title', i.title,
            'brand', i.brand,
            'image_url', i.image_url,
            'seller_id', s.seller_id,
            'amount', s.amount,
            'payment', s.payment,
            'price_per_unit', s.price_per_unit,
            'created_at', s.created_at
        )
    ) AS items
FROM public.sales s
LEFT JOIN public.items i ON i.id = s.item_id
GROUP BY
    DATE(s.created_at),
    s.concept,
    i.brand
ORDER BY
    DATE(s.created_at) DESC,
    s.concept,
    i.brand;
$$;


CREATE OR REPLACE FUNCTION public.has_role(required_role user_role)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    RETURN (
        SELECT role = required_role
        FROM public.profiles
        WHERE id = auth.uid()
    );
END;
$$;

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
AS $$
SELECT role IN ('admin', 'superadmin')
FROM public.profiles
WHERE id = auth.uid();
$$;
