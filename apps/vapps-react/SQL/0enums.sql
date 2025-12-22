CREATE TYPE public.financial_record_type AS ENUM (
  'income',
  'profit'
);

CREATE TYPE public.user_role AS ENUM (
  'admin',
  'seller',
  'superadmin'
);
