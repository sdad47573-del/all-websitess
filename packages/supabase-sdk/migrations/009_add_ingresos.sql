create table ingresos (
  id bigint generated always as identity primary key,
  label text not null,
  eur numeric(12,2) not null,
  fecha date not null
);

-- ============================================================================
-- ROW LEVEL SECURITY (RLS)
-- Description: Enable RLS and create policies for public read access
-- ============================================================================

-- Enable RLS on all tables
ALTER TABLE public.ingresos ENABLE ROW LEVEL SECURITY;

-- -- Ingresos policies
-- CREATE POLICY "Allow public read access to active ingresos"
--     ON public.ingresos
--     FOR SELECT
--     USING (active = true);

CREATE POLICY "Allow authenticated users full access to ingresos"
    ON public.ingresos
    FOR ALL
    USING (auth.role() = 'authenticated');
