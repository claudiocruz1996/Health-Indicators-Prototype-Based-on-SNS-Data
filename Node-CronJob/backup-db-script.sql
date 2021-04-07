-- DROP TABLE public.hipertensao;
-- DROP TABLE public.diabetes;

CREATE TABLE public.hipertensao
(
    id integer NOT NULL DEFAULT nextval('hipertensao_id_seq'::regclass),
    contagem_de_utentes_inscritos_com_hipertensao_arterial_com_pres numeric NOT NULL,
    regiao character varying(250) COLLATE pg_catalog."default" NOT NULL,
    proporcao_hipertensos_65_a_com_pa_150_90 numeric NOT NULL,
    tempo character varying(50) COLLATE pg_catalog."default" NOT NULL,
    aces character varying(250) COLLATE pg_catalog."default" NOT NULL,
    ponto_ou_localizacao_geografica character varying(250) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT hipertensao_pkey PRIMARY KEY (id)
)

CREATE TABLE public.diabetes
(
    id integer NOT NULL DEFAULT nextval('hipertensao_id_seq'::regclass),
    contagem_de_utentes_inscritos_com_diabetes_com_ultimo_resultado_de_hgba1c_inferior_ou_igual_a_8_0 numeric NOT NULL,
    regiao character varying(250) COLLATE pg_catalog."default" NOT NULL,
	tempo character varying(50) COLLATE pg_catalog."default" NOT NULL,
	ponto_ou_localizacao_geografica character varying(250) COLLATE pg_catalog."default" NOT NULL,
    proporcao_dm_c_ultima_hgba1c_8_0 numeric NOT NULL,
	contagem_de_utentes_inscritos_com_diabetes_com_exame_dos_pes_realizado_no_ultimo_ano numeric NOT NULL,
	proporcao_dm_com_exame_pes_ultimo_ano numeric NOT NULL,
    aces character varying(250) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT diabetes_pkey PRIMARY KEY (id)
)


TABLESPACE pg_default;

ALTER TABLE public.hipertensao
    OWNER to claudio;