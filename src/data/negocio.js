export const negocio = {
  nome: 'Nexo Tech',
  assinatura: 'Assistência técnica de celulares',
  cidade: 'Canoas',
  estado: 'RS',
  bairro: 'Centro',
  endereco: 'Rua das Araucárias, 210',
  cep: '92310-000',
  cobertura: ['Canoas', 'Porto Alegre', 'região'],
  marcas: ['iPhone', 'Samsung', 'Xiaomi', 'Motorola', 'LG'],
  telefoneDisplay: '(51) 90000-0000',
  telefoneDigits: '5551900000000',
  telefoneLink: 'tel:+5551900000000',
  instagram: '@nexotech.assistencia',
  instagramUrl: 'https://www.instagram.com/tchesites/',
  facebookUrl: 'https://example.com/facebook',
  // WhatsApp fictício do projeto demonstrativo.
  whatsappUrl: 'https://wa.me/5551900000000',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Centro%2C+Canoas+-+RS',
  googleMapsEmbed:
    'https://www.google.com/maps?q=Centro%2C+Canoas+-+RS&z=14&output=embed',
  garantiaDias: 90,
};

export const servicos = [
  {
    id: 'tela',
    nome: 'Troca de tela',
    preco: 149,
    descricao: 'Vidro trincado, manchas ou tela sem imagem.',
    icone: 'screen',
    mensagem: 'a tela trincada ou sem imagem',
  },
  {
    id: 'bateria',
    nome: 'Troca de bateria',
    preco: 120,
    descricao: 'Bateria que descarrega rápido ou desliga sozinho.',
    icone: 'battery',
    mensagem: 'a bateria descarregando rápido ou desligando sozinho',
  },
  {
    id: 'conector',
    nome: 'Troca de conector',
    preco: 100,
    descricao: 'Celular que não carrega ou carrega só em uma posição.',
    icone: 'plug',
    mensagem: 'o conector de carga com problema',
  },
];

export const outrosServicos = [
  {
    nome: 'Software, atualizações e sistema',
    descricao: 'Travamentos, lentidão e falhas de sistema.',
  },
  {
    nome: 'Câmera e alto-falante',
    descricao: 'Falhas de imagem, áudio e chamadas.',
  },
  {
    nome: 'Tampa e vidro traseiro',
    descricao: 'Trincados e danos na parte de trás.',
  },
  {
    nome: 'Limpeza e revisão interna',
    descricao: 'Higienização e checagem de componentes.',
  },
];

export const faq = [
  {
    pergunta: 'Vocês buscam o celular em casa?',
    resposta:
      'Sim. A tele-busca é grátis em Canoas, Porto Alegre e região. Você combina o endereço e o horário pelo WhatsApp.',
  },
  {
    pergunta: 'Quanto tempo leva o conserto?',
    resposta:
      'Tela, bateria e conector costumam sair no mesmo dia. O prazo é confirmado no orçamento, porque depende do modelo e da peça.',
  },
  {
    pergunta: 'O conserto tem garantia?',
    resposta:
      'Sim: 90 dias no serviço e na peça substituída, desde que o aparelho não apresente sinais de mau uso. A troca de tela só mantém a garantia com película de proteção.',
  },
  {
    pergunta: 'As peças são originais?',
    resposta:
      'Trabalhamos com peças de qualidade compatíveis com cada modelo. O tipo de peça e o valor são informados antes do serviço — você aprova antes de qualquer reparo.',
  },
  {
    pergunta: 'Quais marcas vocês atendem?',
    resposta:
      'iPhone, Samsung, Xiaomi, Motorola, LG e outras. Manda o modelo no WhatsApp que a gente confirma.',
  },
  {
    pergunta: 'Meu celular não liga. Dá para consertar?',
    resposta:
      'Na maioria dos casos, sim. Chama no WhatsApp mesmo assim: a gente avalia o aparelho e passa o orçamento antes de começar.',
  },
  {
    pergunta: 'Preciso levar o carregador?',
    resposta:
      'Se o problema for de carga ou bateria, traga o carregador e o cabo que você usa. Isso ajuda no diagnóstico.',
  },
];

export const garantia = {
  cobertura: [
    'Defeitos relacionados ao serviço realizado ou à peça substituída.',
    'Prazo de 90 dias, contados a partir da data do atendimento.',
  ],
  naoCoberto: [
    'Telas usadas sem película de proteção.',
    'Quedas, impactos, pressão excessiva ou umidade.',
    'Mau uso, manuseio inadequado ou intervenção de terceiros.',
    'Peças danificadas depois da entrega do aparelho.',
  ],
  tela: [
    'Para manter a garantia da tela, é obrigatório o uso de película de proteção.',
    'Não realizamos a troca de telas que apresentem avarias, quebras ou danos causados por quedas.',
  ],
  solicitacao: [
    'Apresente o comprovante do serviço.',
    'O aparelho será avaliado pela assistência para verificar se o problema está relacionado ao serviço e dentro das condições de cobertura.',
  ],
};

export const whatsappLink = (
  mensagem = 'Olá! Vi o site da Nexo Tech e quero um orçamento.'
) => `${negocio.whatsappUrl}?text=${encodeURIComponent(mensagem)}`;
