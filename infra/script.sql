CREATE TABLE public.products (
	id varchar(36) NOT NULL,
	name varchar(100) NOT NULL,
	price double precision NOT NULL DEFAULT 0,
	quantity integer NOT NULL DEFAULT 0
);