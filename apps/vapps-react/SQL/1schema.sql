-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.buy (
  id bigint NOT NULL DEFAULT nextval('buy_id_seq'::regclass),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  eur numeric NOT NULL,
  fecha date NOT NULL,
  label text NOT NULL UNIQUE,
  CONSTRAINT buy_pkey PRIMARY KEY (id)
);
CREATE TABLE public.buyeditems (
  id bigint NOT NULL DEFAULT nextval('buyeditems_id_seq'::regclass),
  buy_id bigint NOT NULL,
  item_id bigint NOT NULL,
  quantity integer NOT NULL,
  CONSTRAINT buyeditems_pkey PRIMARY KEY (id),
  CONSTRAINT buyeditems_buy_id_fkey FOREIGN KEY (buy_id) REFERENCES public.buy(id),
  CONSTRAINT buyeditems_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.items(id)
);
CREATE TABLE public.financial_records (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  profile_id uuid NOT NULL,
  type USER-DEFINED NOT NULL,
  label text NOT NULL CHECK (length(TRIM(BOTH FROM label)) > 0),
  amount numeric NOT NULL,
  date date NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT financial_records_pkey PRIMARY KEY (id),
  CONSTRAINT financial_records_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles(id)
);
CREATE TABLE public.items (
  id bigint NOT NULL DEFAULT nextval('items_id_seq'::regclass),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  title text NOT NULL UNIQUE CHECK (length(TRIM(BOTH FROM title)) > 0),
  es_title text NOT NULL UNIQUE CHECK (length(TRIM(BOTH FROM es_title)) > 0),
  image_url text,
  active boolean NOT NULL DEFAULT true,
  amount numeric NOT NULL DEFAULT 0 CHECK (amount >= 0::numeric),
  CONSTRAINT items_pkey PRIMARY KEY (id)
);
CREATE TABLE public.profiles (
  id uuid NOT NULL,
  role USER-DEFINED NOT NULL DEFAULT 'seller'::user_role,
  full_name text NOT NULL CHECK (length(TRIM(BOTH FROM full_name)) > 0),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT profiles_pkey PRIMARY KEY (id),
  CONSTRAINT profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id)
);
CREATE TABLE public.sales (
  id bigint NOT NULL DEFAULT nextval('sales_id_seq'::regclass),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  item_id bigint NOT NULL,
  seller_id text NOT NULL,
  concept text NOT NULL,
  price_per_unit numeric NOT NULL CHECK (price_per_unit >= 0::numeric),
  payment numeric CHECK (payment >= 0::numeric),
  amount numeric NOT NULL CHECK (amount > 0::numeric),
  active boolean NOT NULL DEFAULT true,
  CONSTRAINT sales_pkey PRIMARY KEY (id),
  CONSTRAINT sales_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.items(id)
);