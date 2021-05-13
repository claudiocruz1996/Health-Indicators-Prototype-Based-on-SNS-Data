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


CREATE SEQUENCE saude_da_mulher_e_crianca_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

CREATE TABLE public.saude_da_mulher_e_crianca
(
    id integer NOT NULL DEFAULT nextval('saude_da_mulher_e_crianca_id_seq'::regclass),
    regiao character varying(250) COLLATE pg_catalog."default" NOT NULL,
    proporcao_r_nasc_consulta_vigil_ate_28_dias_vida real NOT NULL,
    proporcao_r_nasc_domicilio_enf_ate_15_dia_vida real NOT NULL,
    tempo date NOT NULL,
    lat double precision NOT NULL,
    long double precision NOT NULL,
    r_nasc_consulta_vigil_ate_28_dias_vida integer NOT NULL,
	r_nasc_domicilio_enf_ate_15_dia_vida integer NOT NULL,
    aces character varying(250) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT saude_da_mulher_e_crianca_pkey PRIMARY KEY (id)
)


CREATE SEQUENCE rastreios_oncologicos_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

CREATE TABLE public.rastreios_oncologicos
(
    id integer NOT NULL DEFAULT nextval('rastreios_oncologicos_id_seq'::regclass),
    regiao character varying(250) COLLATE pg_catalog."default" NOT NULL,
    mulheres_colpocitologia_atualizada integer NOT NULL,
    utentes_rastreio_cancro_cr_efetuado integer NOT NULL,
    tempo date NOT NULL,
    proporcao_utentes_50_75_anos_rastreio_cancro_cr real NOT NULL,
	proporcao_mulheres_50_70_anos_mamogr_dois_anos real NOT NULL,
    aces character varying(250) COLLATE pg_catalog."default" NOT NULL,
    lat double precision NOT NULL,
    long double precision NOT NULL,
    mulheres_registo_de_mamogr_ultimos_dois_anos integer NOT NULL,
    proporcao_mulheres_25_60_anos_colpoc_atualizada real NOT NULL,
    CONSTRAINT rastreios_oncologicos_pkey PRIMARY KEY (id)
)

CREATE SEQUENCE rastreios_oncologicos_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

CREATE TABLE public.rastreios_oncologicos
(
    id integer NOT NULL DEFAULT nextval('rastreios_oncologicos_id_seq'::regclass),
    regiao character varying(250) COLLATE pg_catalog."default" NOT NULL,
    mulheres_colpocitologia_atualizada integer NOT NULL,
    utentes_rastreio_cancro_cr_efetuado integer NOT NULL,
    tempo date NOT NULL,
    proporcao_utentes_50_75_anos_rastreio_cancro_cr real NOT NULL,
	proporcao_mulheres_50_70_anos_mamogr_dois_anos real NOT NULL,
    aces character varying(250) COLLATE pg_catalog."default" NOT NULL,
    lat double precision NOT NULL,
    long double precision NOT NULL,
    mulheres_registo_de_mamogr_ultimos_dois_anos integer NOT NULL,
    proporcao_mulheres_25_60_anos_colpoc_atualizada real NOT NULL,
    CONSTRAINT rastreios_oncologicos_pkey PRIMARY KEY (id)
)


CREATE SEQUENCE registo_de_testamentos_vitais_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

CREATE TABLE public.registo_de_testamentos_vitais
(
    id integer NOT NULL DEFAULT nextval('registo_de_testamentos_vitais_id_seq'::regclass),
    ars character varying(250) COLLATE pg_catalog."default" NOT NULL,
    test_vitais_utentes_nac_portuguesa integer NOT NULL,
    test_vitais_inativos_mulheres_idade_maior_ou_igual_65_anos integer NOT NULL,
    total_test_vitais_inativos_utentes integer NOT NULL,
    consultas_test_vitais_por_utentes_via_area_cidadao integer NOT NULL,
    lat double precision,
    long double precision,
    test_vitais_ativos_homens_idade_menor_65_anos integer NOT NULL,
    tempo date NOT NULL,
    obitos_utentes_com_test_vital int NOT NULL,
    test_vitais_inativos_homens_idade_maior_ou_igual_65_anos integer NOT NULL,
    test_vitais_inativos_homens_idade_menor_65_anos integer NOT NULL,
    test_vitais_inativos_mulheres_idade_menor_65_anos integer NOT NULL,
    test_vitais_ativos_mulheres_idade_menor_65_anos integer NOT NULL,
    total_test_vitais_ativos_utentes integer NOT NULL,
    aces character varying(250) COLLATE pg_catalog."default" NOT NULL,
    total_test_vitais_de_utentes integer NOT NULL,
    test_vitais_ativos_mulheres_idade_maior_ou_igual_65_anos integer NOT NULL,
    test_vitais_ativos_homens_idade_maior_ou_igual_65_anos integer NOT NULL,
    consultas_test_vitais_por_profissionais_via_portal_da_saude integer NOT NULL,
    CONSTRAINT registo_de_testamentos_vitais_pkey PRIMARY KEY (id)
)


CREATE SEQUENCE referenciacoes_soep_emitidas_nos_centros_de_saude_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

CREATE TABLE public.referenciacoes_soep_emitidas_nos_centros_de_saude
(
    id integer NOT NULL DEFAULT nextval('referenciacoes_soep_emitidas_nos_centros_de_saude_id_seq'::regclass),
    ars character varying(250) COLLATE pg_catalog."default" NOT NULL,
    tempo date NOT NULL,
    sexo character varying(50) COLLATE pg_catalog."default" NOT NULL,
    cheques_emitidos int NOT NULL,
    aces character varying(250) COLLATE pg_catalog."default" NOT NULL,
    lat double precision NOT NULL,
    long double precision NOT NULL,
    faixa_etaria character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT referenciacoes_soep_emitidas_nos_centros_de_saude_pkey PRIMARY KEY (id)
)


TABLESPACE pg_default;

ALTER TABLE public.hipertensao
    OWNER to claudio;

