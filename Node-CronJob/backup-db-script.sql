-- DROP TABLE public.hipertensao;
-- DROP TABLE public.diabetes;

CREATE SEQUENCE hipertensao_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

CREATE TABLE public.hipertensao
(
    id integer NOT NULL DEFAULT nextval('hipertensao_id_seq'::regclass),
	utentes_hipertensao_pa_menor_150_90_mmhg_n integer NOT NULL,
    regiao character varying(250) COLLATE pg_catalog."default" NOT NULL,
	lat double precision NOT NULL,
    long double precision NOT NULL,
    hipertensos_65_anos_pa_150_90 real NOT NULL,
    tempo date NOT NULL,
    aces character varying(250) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT hipertensao_pkey PRIMARY KEY (id)
)

CREATE SEQUENCE diabetes_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

CREATE TABLE public.diabetes
(
    id integer NOT NULL DEFAULT nextval('diabetes_id_seq'::regclass),
    utentes_com_hgba1c_inferior_ou_igual_8_0 integer NOT NULL,
    regiao character varying(250) COLLATE pg_catalog."default" NOT NULL,
    lat double precision NOT NULL,
    long double precision NOT NULL,
    tempo date NOT NULL,
    proporcao_dm_ultima_hgba1c_8_0 real NOT NULL,
	utentes_com_exame_dos_pes_realizado_no_ultimo_ano integer NOT NULL,
	proporcao_dm_com_exame_pes_ultimo_ano real NOT NULL,
    aces character varying(250) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT diabetes_pkey PRIMARY KEY (id)
)


TABLESPACE pg_default;

ALTER TABLE public.hipertensao
    OWNER to claudio;