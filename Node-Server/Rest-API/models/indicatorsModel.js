const joi = require("joi").extend(require("@joi/date"))

const indicatorsModel = joi.object().keys({
  indicator_name: joi
    .string()
    .valid(
      "hipertensao",
      "diabetes",
      "saude_da_mulher_e_crianca",
      "rastreios_oncologicos",
      "registo_de_testamentos_vitais",
      "referenciacoes_soep_emitidas_nos_centros_de_saude",
      "utentes_inscritos_em_cuidados_de_saude_primarios",
      "evolucao_do_numero_de_unidades_funcionais",
      "evolucao_dos_contactos_de_enfermagem_nos_csp",
      "acesso_de_consultas_medicas_pela_populacao_inscrita",
      "evolucao_das_consultas_medicas_nos_csp"
    )
    .required(),
  start_date: joi.date().format("YYYY/MM/DD").utc(),
  end_date: joi.date().format("YYYY/MM/DD").utc(),
  aces: joi
    .string()
    .valid(
      "ACES Almada-Seixal",
      "ACES Arco Ribeirinho",
      "ACES Baixo Alentejo",
      "ACES Baixo Vouga",
      "ACES Cascais",
      "ACES Amadora",
      "ACES Arrabida",
      "ACES Cova da Beira",
      "ACES Entre Douro e Vouga I - Feira e Arouca",
      "ACES Entre Douro e Vouga II - Aveiro Norte",
      "ACES Alto Tras-os-Montes - Alto Tamega e Barroso",
      "ACES Alentejo Central",
      "ACES Algarve I - Algarve Central",
      "ACES Algarve II - Algarve Barlavento",
      "ACES Algarve III - Algarve Sotavento",
      "ACES Alto Ave - Guimaraes, Vizela e Terras de Basto",
      "ACES Ave - Famalicao",
      "ACES Baixo Mondego",
      "ACES Cavado I - Braga",
      "ACES Cavado II - Geres e Cabreira",
      "ACES Cavado III - Barcelos e Esposende",
      "ACES Dao Lafoes",
      "ACES Douro I - Marao e Douro Norte",
      "ACES Douro II - Douro Sul",
      "ACES Grande Porto I - Santo Tirso e Trofa",
      "ACES Grande Porto II - Gondomar",
      "ACES Grande Porto III - Maia e Valongo",
      "ACES Grande Porto IV - Povoa do Varzim e Vila do Conde",
      "ACES Grande Porto V - Porto Ocidental",
      "ACES Grande Porto VI - Porto Oriental",
      "ACES Grande Porto VII - Gaia",
      "ACES Grande Porto VIII - Espinho/Gaia",
      "ACES Pinhal Interior Norte",
      "ACES Pinhal Litoral",
      "ACES Tamega I - Baixo Tamega",
      "ACES Tamega II - Vale do Sousa Sul",
      "ACES Tamega III - Vale do Sousa Norte",
      "ACES Estuario do Tejo",
      "ACES Leziria",
      "ACES Lisboa Central",
      "ACES Lisboa Norte",
      "ACES Lisboa Ocidental e Oeiras",
      "ACES Loures-Odivelas",
      "ACES Medio Tejo",
      "ACES Oeste Norte",
      "ACES Oeste Sul",
      "ACES Sintra",
      "ACES Alentejo Litoral",
      "ACES Alto Minho",
      "ACES Beira Interior Sul",
      "ACES Guarda",
      "ACES Matosinhos",
      "ACES Alto Tras-os-Montes - Nordeste",
      "ACES Pinhal Interior Sul",
      "ACES Sao Mamede"
    )
    .required(),
})

module.exports = indicatorsModel
