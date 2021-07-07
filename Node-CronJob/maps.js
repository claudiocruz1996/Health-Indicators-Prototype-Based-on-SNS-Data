const mapping = {
  hipertensao: {
    contagem_de_utentes_inscritos_com_hipertensao_arterial_com_pressao_arterial_inferior_a_150_90_mmhg_n: "cntg_hipertensos_pa_menor_150_90_mmhg_n",
    regiao: "regiao",
    ponto_ou_localizacao_geografica_1: "lat",
    ponto_ou_localizacao_geografica_2: "long",
    proporcao_hipertensos_65_a_com_pa_150_90: "prctg_hipertensos_menores_65a_pa_menor_150_90_mmhg_n",
    tempo: "tempo",
    aces: "aces",
    cntg_hipertensos_pa_menor_150_90_mmhg_n_norm: "cntg_hipertensos_pa_menor_150_90_mmhg_n_norm",
    prctg_hipertensos_menores_65a_pa_menor_150_90_mmhg_n_norm: "prctg_hipertensos_menores_65a_pa_menor_150_90_mmhg_n_norm",
  },
  diabetes: {
    contagem_de_utentes_inscritos_com_diabetes_com_ultimo_resultado_de_hgba1c_inferior_ou_igual_a_8_0: "cntg_utentes_com_hgba1c_inferior_ou_igual_8_0",
    regiao: "regiao",
    ponto_ou_localizacao_geografica_1: "lat",
    ponto_ou_localizacao_geografica_2: "long",
    tempo: "tempo",
    proporcao_dm_c_ultima_hgba1c_8_0: "prctg_dm_ultima_hgba1c_8_0",
    contagem_de_utentes_inscritos_com_diabetes_com_exame_dos_pes_realizado_no_ultimo_ano: "cntg_utentes_com_exame_dos_pes_realizado_no_ultimo_ano",
    proporcao_dm_com_exame_pes_ultimo_ano: "prctg_dm_com_exame_pes_ultimo_ano",
    aces: "aces",
  },
  saude_da_mulher_e_crianca: {
    regiao: "regiao",
    proporcao_rn_c_cons_med_vigil_ate_28_dias_vida: "prctg_r_nasc_consulta_vigil_ate_28_dias_vida",
    proporcao_rn_c_domicilio_enf_ate_15o_dia_de_vida: "prctg_r_nasc_domicilio_enf_ate_15_dia_vida",
    tempo: "tempo",
    ponto_ou_localizacao_geografica_1: "lat",
    ponto_ou_localizacao_geografica_2: "long",
    contagem_de_recem_nascidos_com_pelo_menos_uma_consulta_medica_de_vigilancia_nos_primeiros_28_dias_de: "cntg_r_nasc_consulta_vigil_ate_28_dias_vida",
    contagem_de_recem_nascidos_que_tiveram_pelo_menos_um_domicilio_de_enfermagem_durante_os_primeiros_15: "cntg_r_nasc_domicilio_enf_ate_15_dia_vida",
    aces: "aces",
  },
  rastreios_oncologicos: {
    regiao: "regiao",
    contagem_de_mulheres_com_colpocitologia_atualizada: "mulheres_colpocitologia_atualizada",
    contagem_de_utentes_inscritos_com_rastreio_do_cancro_do_colon_e_reto_efetuado: "utentes_rastreio_cancro_cr_efetuado",
    tempo: "tempo",
    proporcao_utentes_50_75_a_c_rastreio_cancro_cr: "proporcao_utentes_50_75_anos_rastreio_cancro_cr",
    proporcao_mulheres_50_70_a_c_mamogr_2_anos: "proporcao_mulheres_50_70_anos_mamogr_dois_anos",
    aces: "aces",
    ponto_ou_localizacao_geografica_1: "lat",
    ponto_ou_localizacao_geografica_2: "long",
    contagem_de_mulheres_com_registo_de_mamografia_nos_ultimos_dois_anos: "mulheres_registo_de_mamogr_ultimos_dois_anos",
    proporcao_mulheres_25_60_a_c_colpoc_atuali: "proporcao_mulheres_25_60_anos_colpoc_atualizada",
  },
  registo_de_testamentos_vitais: {
    ars: "ars",
    testamentos_vitais_de_utentes_com_nacionalidade_portuguesa: "test_vitais_utentes_nac_portuguesa",
    testamentos_vitais_inativos_utentes_sexo_feminino_com_idade_65_anos0: "test_vitais_inativos_mulheres_idade_maior_ou_igual_65_anos",
    total_testamentos_vitais_inativos_de_utentes: "total_test_vitais_inativos_utentes",
    consultas_dos_testamentos_vitais_pelos_utentes_via_area_do_cidadao: "consultas_test_vitais_por_utentes_via_area_cidadao",
    ponto_ou_localizacao_geografica_1: "lat",
    ponto_ou_localizacao_geografica_2: "long",
    testamentos_vitais_ativos_utentes_sexo_masculino_com_idade_65_anos: "test_vitais_ativos_homens_idade_menor_65_anos",
    tempo: "tempo",
    obitos_de_utentes_com_testamento_vital: "obitos_utentes_com_test_vital",
    testamentos_vitais_inativos_utentes_sexo_masculino_com_idade_65_anos0: "test_vitais_inativos_homens_idade_maior_ou_igual_65_anos",
    testamentos_vitais_inativos_utentes_sexo_masculino_com_idade_65_anos: "test_vitais_inativos_homens_idade_menor_65_anos",
    testamentos_vitais_inativos_utentes_sexo_feminino_com_idade_65_anos: "test_vitais_inativos_mulheres_idade_menor_65_anos",
    testamentos_vitais_ativos_utentes_sexo_feminino_com_idade_65_anos: "test_vitais_ativos_mulheres_idade_menor_65_anos",
    total_testamentos_vitais_ativos_de_utentes: "total_test_vitais_ativos_utentes",
    aces: "aces",
    total_testamentos_vitais_de_utentes: "total_test_vitais_de_utentes",
    testamentos_vitais_ativos_utentes_sexo_feminino_com_idade_65_anos0: "test_vitais_ativos_mulheres_idade_maior_ou_igual_65_anos",
    testamentos_vitais_ativos_utentes_sexo_masculino_com_idade_65_anos0: "test_vitais_ativos_homens_idade_maior_ou_igual_65_anos",
    consultas_dos_testamentos_vitais_pelos_profissionais_de_saude_via_portal_da_saude: "consultas_test_vitais_por_profissionais_via_portal_da_saude",
  },
  referenciacoes_soep_emitidas_nos_centros_de_saude: {
    ars: "ars",
    periodo: "tempo",
    sexo: "sexo",
    cheques_emitidos: "cheques_emitidos",
    aces: "aces",
    ponto_ou_localizacao_geografica_1: "lat",
    ponto_ou_localizacao_geografica_2: "long",
    faixa_etaria: "faixa_etaria",
  },
  utentes_inscritos_em_cuidados_de_saude_primarios: {
    total_utentes_sem_mdf_atribuido_por_opcao0: "percentagem_utentes_sem_mdf_por_opcao",
    total_utentes_com_mdf_atribuido: "utentes_com_mdf",
    taxa_de_utilizacao_consultas_medicas_1_ano_todos_os_utentes: "taxa_consultas_medicas_1_ano_todos_utentes",
    ars: "ars",
    periodo: "tempo",
    total_utentes_sem_mdf_atribuido_por_opcao: "utentes_sem_mdf_por_opcao",
    total_utentes_com_mdf_atribuido0: "percentagem_utentes_com_mdf",
    total_utentes_sem_mdf_atribuido0: "percentagem_utentes_sem_mdf",
    utentes_inscritos_csp: "utentes_inscritos_csp",
    aces: "aces",
    taxa_de_utilizacao_consultas_medicas_1_ano_nos_utentes_sem_mdf: "taxa_consultas_medicas_1_ano_utentes_sem_mdf",
    ponto_ou_localizacao_geografica_1: "lat",
    ponto_ou_localizacao_geografica_2: "long",
    total_utentes_sem_mdf_atribuido: "utentes_sem_mdf",
  },
  evolucao_do_numero_de_unidades_funcionais: {
    ponto_ou_localizacao_geografica_1: "lat",
    ponto_ou_localizacao_geografica_2: "long",
    entidade: "aces",
    ars: "ars",
    tempo: "tempo",
    total_usf: "total_usf",
  },
  evolucao_dos_contactos_de_enfermagem_nos_csp: {
    regiao: "regiao",
    tempo: "tempo",
    entidade: "aces",
    ponto_ou_localizacao_geografica_1: "lat",
    ponto_ou_localizacao_geografica_2: "long",
    no_de_contactos_de_enfermagem_nao_presenciais_qt: "cntg_nmr_contactos_enfermagem_nao_presenciais",
    no_de_contactos_de_enfermagem_presenciais_qt: "cntg_nmr_contactos_enfermagem_presenciais",
  },

  acesso_de_consultas_medicas_pela_populacao_inscrita: {
    taxa_de_utilizacao_de_consultas_medicas_3_anos: "prctg_utilizacao_consultas_3_anos",
    regiao: "regiao",
    tempo: "tempo",
    no_utentes_com_pelo_menos_1_consulta_medica_em_3_anos: "cntg_utentes_pelo_menos_1_consulta_em_3_anos",
    taxa_de_utilizacao_global_de_consultas_medicas_1_ano: "prctg_de_utilizacao_global_de_consultas_medicas_1_ano",
    entidade: "aces",
    ponto_ou_localizacao_geografica_1: "lat",
    ponto_ou_localizacao_geografica_2: "long",
    no_utentes_pelo_menos_1_consulta_medicas_presencial_ou_nao_presencial_1_ano: "cntg_utentes_pelo_menos_1_consulta_presencial_ou_nao_1_ano",
  },

  evolucao_das_consultas_medicas_nos_csp: {
    regiao: "regiao",
    no_de_consultas_medicas_nao_presenciais_ou_inespecificas_qt: "consultas_nao_presenciais_ou_inespecificas",
    ponto_ou_localizacao_geografica_1: "lat",
    ponto_ou_localizacao_geografica_2: "long",
    tempo: "tempo",
    no_de_consultas_medicas_presencias_qt: "consultas_medicas_presencias",
    no_de_consultas_medicas_ao_domicilio_qt: "consultas_medicas_ao_domicilio",
    entidade: "aces",
  },
}

module.exports = mapping
