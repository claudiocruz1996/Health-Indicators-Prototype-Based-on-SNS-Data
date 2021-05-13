const mapping = {
  hipertensao: {
    contagem_de_utentes_inscritos_com_hipertensao_arterial_com_pressao_arterial_inferior_a_150_90_mmhg_n:
      "utentes_hipertensao_pa_menor_150_90_mmhg_n",
    regiao: "regiao",
    ponto_ou_localizacao_geografica_1: "lat",
    ponto_ou_localizacao_geografica_2: "long",
    proporcao_hipertensos_65_a_com_pa_150_90: "hipertensos_65_anos_pa_150_90",
    tempo: "tempo",
    aces: "aces",
  },
  diabetes: {
    contagem_de_utentes_inscritos_com_diabetes_com_ultimo_resultado_de_hgba1c_inferior_ou_igual_a_8_0:
      "utentes_com_hgba1c_inferior_ou_igual_8_0",
    regiao: "regiao",
    ponto_ou_localizacao_geografica_1: "lat",
    ponto_ou_localizacao_geografica_2: "long",
    tempo: "tempo",
    proporcao_dm_c_ultima_hgba1c_8_0: "proporcao_dm_ultima_hgba1c_8_0",
    contagem_de_utentes_inscritos_com_diabetes_com_exame_dos_pes_realizado_no_ultimo_ano:
      "utentes_com_exame_dos_pes_realizado_no_ultimo_ano",
    proporcao_dm_com_exame_pes_ultimo_ano: "proporcao_dm_com_exame_pes_ultimo_ano",
    aces: "aces",
  },
  saude_da_mulher_e_crianca: {
    regiao: "regiao",
    proporcao_rn_c_cons_med_vigil_ate_28_dias_vida: "proporcao_r_nasc_consulta_vigil_ate_28_dias_vida",
    proporcao_rn_c_domicilio_enf_ate_15o_dia_de_vida: "proporcao_r_nasc_domicilio_enf_ate_15_dia_vida",
    tempo: "tempo",
    ponto_ou_localizacao_geografica_1: "lat",
    ponto_ou_localizacao_geografica_2: "long",
    contagem_de_recem_nascidos_com_pelo_menos_uma_consulta_medica_de_vigilancia_nos_primeiros_28_dias_de:
      "r_nasc_consulta_vigil_ate_28_dias_vida",
    contagem_de_recem_nascidos_que_tiveram_pelo_menos_um_domicilio_de_enfermagem_durante_os_primeiros_15:
      "r_nasc_domicilio_enf_ate_15_dia_vida",
    aces: "aces",
  },
  rastreios_oncologicos: {
    regiao: "regiao",
    contagem_de_mulheres_com_colpocitologia_atualizada: "mulheres_colpocitologia_atualizada",
    contagem_de_utentes_inscritos_com_rastreio_do_cancro_do_colon_e_reto_efetuado:
      "utentes_rastreio_cancro_cr_efetuado",
    tempo: "tempo",
    proporcao_utentes_50_75_a_c_rastreio_cancro_cr: "proporcao_utentes_50_75_anos_rastreio_cancro_cr",
    proporcao_mulheres_50_70_a_c_mamogr_2_anos: "proporcao_mulheres_50_70_anos_mamogr_dois_anos",
    aces: "aces",
    ponto_ou_localizacao_geografica_1: "lat",
    ponto_ou_localizacao_geografica_2: "long",
    contagem_de_mulheres_com_registo_de_mamografia_nos_ultimos_dois_anos:
      "mulheres_registo_de_mamogr_ultimos_dois_anos",
    proporcao_mulheres_25_60_a_c_colpoc_atuali: "proporcao_mulheres_25_60_anos_colpoc_atualizada",
  },
  registo_de_testamentos_vitais: {
    ars: "ars",
    testamentos_vitais_de_utentes_com_nacionalidade_portuguesa: "test_vitais_utentes_nac_portuguesa",
    testamentos_vitais_inativos_utentes_sexo_feminino_com_idade_65_anos0:
      "test_vitais_inativos_mulheres_idade_maior_ou_igual_65_anos",
    total_testamentos_vitais_inativos_de_utentes: "total_test_vitais_inativos_utentes",
    consultas_dos_testamentos_vitais_pelos_utentes_via_area_do_cidadao:
      "consultas_test_vitais_por_utentes_via_area_cidadao",
    ponto_ou_localizacao_geografica_1: "lat",
    ponto_ou_localizacao_geografica_2: "long",
    testamentos_vitais_ativos_utentes_sexo_masculino_com_idade_65_anos: "test_vitais_ativos_homens_idade_menor_65_anos",
    tempo: "tempo",
    obitos_de_utentes_com_testamento_vital: "obitos_utentes_com_test_vital",
    testamentos_vitais_inativos_utentes_sexo_masculino_com_idade_65_anos0:
      "test_vitais_inativos_homens_idade_maior_ou_igual_65_anos",
    testamentos_vitais_inativos_utentes_sexo_masculino_com_idade_65_anos:
      "test_vitais_inativos_homens_idade_menor_65_anos",
    testamentos_vitais_inativos_utentes_sexo_feminino_com_idade_65_anos:
      "test_vitais_inativos_mulheres_idade_menor_65_anos",
    testamentos_vitais_ativos_utentes_sexo_feminino_com_idade_65_anos:
      "test_vitais_ativos_mulheres_idade_menor_65_anos",
    total_testamentos_vitais_ativos_de_utentes: "total_test_vitais_ativos_utentes",
    aces: "aces",
    total_testamentos_vitais_de_utentes: "total_test_vitais_de_utentes",
    testamentos_vitais_ativos_utentes_sexo_feminino_com_idade_65_anos0:
      "test_vitais_ativos_mulheres_idade_maior_ou_igual_65_anos",
    testamentos_vitais_ativos_utentes_sexo_masculino_com_idade_65_anos0:
      "test_vitais_ativos_homens_idade_maior_ou_igual_65_anos",
    consultas_dos_testamentos_vitais_pelos_profissionais_de_saude_via_portal_da_saude:
      "consultas_test_vitais_por_profissionais_via_portal_da_saude",
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
}

module.exports = mapping
