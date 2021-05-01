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
    proporcao_dm_com_exame_pes_ultimo_ano:
      "proporcao_dm_com_exame_pes_ultimo_ano",
    aces: "aces",
  },
}

module.exports = mapping
