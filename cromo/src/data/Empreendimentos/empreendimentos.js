const empreendimentos = [
  {
    titulo: "Residencial Florença 2ª Etapa",
    tipo: "Lotes comerciais & residenciais",
    slug: "exemplo-de-titulo-casa",
    status: "Em construção",
    logo:"/empreendimento.png",
    plantaBaixa: "https://exemplo.com/planta-baixa.jpg",
    descricao:
      "Localizado em uma área estratégico do município, o Residencial Florença oferece lotes com infraestrutura completa de energia elétrica, rede de água, iluminação pública, galerias pluviais, além de contar com ruas com asfalto e meio-fio.",
    loteInicio: "686",
    loteFim: "255m2",
    infra: [
      {
        nome: "Asfalto e Meio-fio",
        url: "https://exemplo.com/infra/asfalto-meio-fio"
      },
      {
        nome: "Rede de Água",
        url: "https://exemplo.com/infra/rede-agua"
      },
      {
        nome: "Energia Elétrica",
        url: "https://exemplo.com/infra/energia-eletrica"
      },
      {
        nome: "Iluninação Pública",
        url: "https://exemplo.com/infra/iluminacao-publica"
      },
      {
        nome: "Galerias Pluviais",
        url: "https://exemplo.com/infra/galerias-pluviais"
      }
    ],
    localizacao: {
      endereco: "Rua Exemplo, 123",
      bairro: "Bairro de Exemplo",
      cidade: "Cidade de Exemplo",
      estado: "Estado de Exemplo",
      pais: "País de Exemplo",
      latitude: -23.5505,
      longitude: -46.6333
    },
    galeria: [
      {
        url: "https://exemplo.com/imagem1.jpg",
        legenda: "Legenda da imagem 1"
      },
      {
        url: "https://exemplo.com/imagem2.jpg",
        legenda: "Legenda da imagem 2"
      },
      {
        url: "https://exemplo.com/imagem3.jpg",
        legenda: "Legenda da imagem 3"
      }
    ]
  }
];
export default empreendimentos;
