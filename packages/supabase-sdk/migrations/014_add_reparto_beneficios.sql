create table beneficios (
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
ALTER TABLE public.beneficios ENABLE ROW LEVEL SECURITY;

-- -- Beneficios policies
-- CREATE POLICY "Allow public read access to active beneficios"
--     ON public.beneficios
--     FOR SELECT
--     USING (active = true);

CREATE POLICY "Allow authenticated users full access to beneficios"
    ON public.beneficios
    FOR ALL
    USING (auth.role() = 'authenticated');
