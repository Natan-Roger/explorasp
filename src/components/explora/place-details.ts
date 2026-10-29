import { lugares } from "./data";
import { getPlaceSlug } from "./place-routing";
import type { PlaceDetails } from "./place-types";

type VisitInfo = Omit<PlaceDetails, "slug" | "nome" | "descricao" | "imagem">;

const information: Record<(typeof lugares)[number]["nome"], VisitInfo> = {
  MASP: {
    categoria: "Museu e arquitetura",
    historia: ["Fundado em 1947, o Museu de Arte de São Paulo Assis Chateaubriand é uma referência para a arte e a cultura na cidade. Sua sede histórica na Avenida Paulista, projetada por Lina Bo Bardi, foi inaugurada em 1968.", "O edifício combina um amplo vão livre com espaços expositivos. Os cavaletes de cristal, concebidos por Lina, fazem parte da identidade da apresentação do acervo."],
    atracoes: ["Acervo de arte e exposições temporárias.", "Cavaletes de cristal na apresentação das obras.", "Arquitetura de Lina Bo Bardi e o vão livre da Paulista."],
    endereco: "Avenida Paulista, 1578 — Bela Vista, São Paulo — SP.",
    metro: "Estação Trianon-MASP, Linha 2-Verde.",
    horarios: "Terça, das 10h às 20h; quarta e quinta, das 10h às 18h; sexta, das 10h às 21h; sábado e domingo, das 10h às 18h. Fechado às segundas. Confira o limite de entrada na fonte.",
    precos: "Inteira: R$ 85; meia: R$ 42. Gratuidade às terças e às sextas a partir das 18h, com agendamento e disponibilidade. Confirme valores e regras na bilheteria oficial.",
    dicas: ["Agende seu ingresso, inclusive nos períodos gratuitos.", "Consulte as exposições em cartaz e o limite de horário de entrada antes da visita."],
    fonte: "https://www.masp.org.br/visite",
  },
  "Parque Ibirapuera": {
    categoria: "Parque e cultura",
    historia: ["Inaugurado em 21 de agosto de 1954, durante as comemorações do quarto centenário de São Paulo, o Parque Ibirapuera reúne natureza, lazer e equipamentos culturais.", "Seus lagos, caminhos e áreas verdes convivem com pavilhões, a marquise e espaços de exposições. Cada equipamento cultural pode ter programação e regras próprias."],
    atracoes: ["Lagos, jardins e áreas de descanso.", "Caminhos para caminhada e ciclismo e a marquise.", "Planetário e equipamentos culturais, sujeitos à programação própria."],
    endereco: "Avenida Pedro Álvares Cabral, s/n — Vila Mariana, São Paulo — SP.",
    metro: "AACD-Servidor, Linha 5-Lilás, é uma opção; o percurso depende do portão escolhido. Não há estação junto à entrada.",
    horarios: "Diariamente, das 5h à meia-noite. Portões, museus e demais equipamentos podem ter horários específicos.",
    precos: "Entrada no parque gratuita. Exposições, atividades e equipamentos internos podem ter cobrança própria.",
    dicas: ["Escolha o portão mais próximo da atração que deseja visitar.", "Leve água e proteção solar; confirme separadamente os horários dos equipamentos culturais."],
    fonte: "https://prefeitura.sp.gov.br/web/meio_ambiente/w/parques/regiao_sul/14062",
  },
  "Beco do Batman": {
    categoria: "Arte urbana",
    historia: ["O Beco do Batman, na Vila Madalena, tornou-se conhecido por seus murais e grafites. Segundo a Secretaria Municipal de Turismo, o nome surgiu nos anos 1980, após uma pintura do personagem Batman aparecer no local.", "A arte transforma as paredes e vielas em uma galeria a céu aberto. Os murais mudam ao longo do tempo, tornando cada visita diferente."],
    atracoes: ["Murais de grafite e arte urbana.", "Vielas das ruas Gonçalo Afonso e Medeiros de Albuquerque.", "Escadaria do Patápio e o entorno da Vila Madalena."],
    endereco: "Ruas Gonçalo Afonso e Medeiros de Albuquerque — Vila Madalena, São Paulo — SP.",
    metro: "Estação Vila Madalena, Linha 2-Verde, com percurso final a pé.",
    horarios: "Ruas públicas sem horário fixo de visitação. Galerias, feiras, bares e estabelecimentos têm horários próprios.",
    precos: "Circulação pelas ruas gratuita. Consumo e espaços privados podem cobrar.",
    dicas: ["Prefira a luz do dia para observar e fotografar os murais.", "Respeite moradores e estabelecimentos; uma obra específica pode ter sido substituída."],
    fonte: "https://prefeitura.sp.gov.br/web/turismo/w/conhe%C3%A7a-o-beco-do-batman-reduto-de-arte-urbana-da-cidade-com-o-turistou-tarifa-zero",
  },
  Pinacoteca: {
    categoria: "Arte brasileira",
    historia: ["A Pina Luz é a primeira sede da Pinacoteca, o museu de arte mais antigo de São Paulo. O edifício foi projetado no fim do século XIX por Ramos de Azevedo.", "A reforma de Paulo Mendes da Rocha, no fim dos anos 1990, valorizou os espaços históricos. O acervo e as exposições dialogam com a arquitetura do prédio e com o Parque da Luz."],
    atracoes: ["Acervo de arte brasileira.", "Exposições temporárias da Pina Luz.", "Arquitetura do edifício e esculturas no Parque da Luz."],
    endereco: "Praça da Luz, 2 — Bom Retiro, São Paulo — SP. Informações referentes à Pina Luz.",
    metro: "Estação Luz, com acesso por metrô e trem, a poucos minutos a pé.",
    horarios: "Quarta a segunda, das 10h às 18h, com entrada até as 17h. Fechada às terças.",
    precos: "Inteira: R$ 40; meia: R$ 20. Gratuidade aos sábados e no segundo domingo do mês. A compra online pode incluir taxa; confirme condições e acesso aos edifícios na fonte oficial.",
    dicas: ["Evite malas ou mochilas grandes e consulte as regras de acesso.", "Confira as exposições e a disponibilidade de ingresso gratuito para o dia escolhido."],
    fonte: "https://pinacoteca.org.br/visita/ingresso/",
  },
  "Farol Santander": {
    categoria: "Mirante e exposições",
    historia: ["O Farol Santander ocupa um edifício histórico no centro de São Paulo e reúne memória, exposições e experiências gastronômicas.", "A visita combina os espaços expositivos com a vista do alto do prédio, conectando a história da região à paisagem contemporânea da cidade."],
    atracoes: ["Mirante e café no 26º andar.", "Exposições temporárias.", "Exposição permanente Vista do 4, de Vik Muniz."],
    endereco: "Rua João Brícola, 24 — Centro, São Paulo — SP.",
    metro: "Estação São Bento, Linha 1-Azul.",
    horarios: "Terça a domingo, das 9h às 20h, com entrada para visitação até as 19h. Fechado às segundas.",
    precos: "Inteira: R$ 45; meia: R$ 22,50. Condições especiais e disponibilidade devem ser consultadas na bilheteria oficial.",
    dicas: ["Compre com antecedência e confira a disponibilidade de sessões.", "Verifique as exposições em cartaz e as regras próprias dos espaços gastronômicos."],
    fonte: "https://www.farolsantander.com.br/sp/ingressos/",
  },
  Liberdade: {
    categoria: "Bairro e gastronomia",
    historia: ["A Liberdade reúne diferentes camadas da história paulistana e é marcada pela presença das comunidades japonesa, chinesa e coreana.", "Suas ruas combinam lanternas, comércio, gastronomia, templos e espaços de memória da imigração. É um bairro, não uma atração com entrada e horário únicos."],
    atracoes: ["Praça da Liberdade e as lanternas do bairro.", "Museu Histórico da Imigração Japonesa e Templo Busshinji, com regras próprias de visita.", "Feira de fim de semana e gastronomia, conforme programação."],
    endereco: "Praça da Liberdade e arredores — Liberdade, São Paulo — SP.",
    metro: "Estação Japão-Liberdade, Linha 1-Azul.",
    horarios: "Ruas públicas sem horário fixo. Feira, lojas, restaurantes, museus e templos seguem horários próprios.",
    precos: "Circulação pelas ruas gratuita. Museus, atrações internas e consumo podem ter cobrança própria.",
    dicas: ["Confirme os dias e horários da feira antes de ir.", "Consulte separadamente as regras e horários dos templos e museus."],
    fonte: "https://prefeitura.sp.gov.br/web/turismo/w/visite-o-bairro-da-liberdade-com-o-turistou-tarifa-zero",
  },
  "Centro Histórico": {
    categoria: "História e arquitetura",
    historia: ["O Centro Histórico reúne marcos da fundação e do desenvolvimento de São Paulo. Igrejas, praças e edifícios registram diferentes momentos da formação da cidade.", "A região é formada por ruas públicas e atrações independentes. Um roteiro pode conectar a Sé, o Pátio do Colégio e o entorno do Theatro Municipal, respeitando os horários de cada local."],
    atracoes: ["Catedral da Sé e marco zero.", "Pátio do Colégio.", "Theatro Municipal e arquitetura histórica do centro."],
    endereco: "Região central de São Paulo — SP. Praça da Sé como ponto de referência para o roteiro.",
    metro: "Sé, São Bento ou Anhangabaú, conforme o ponto de partida.",
    horarios: "Ruas públicas sem horário fixo. Igrejas, museus, mirantes e edifícios históricos têm horários próprios.",
    precos: "Circulação pelas ruas gratuita. Atrações internas podem cobrar; não há ingresso único para a região.",
    dicas: ["Escolha previamente as atrações e confira os horários individuais.", "Planeje os trajetos de metrô e prefira percursos movimentados durante o dia."],
    fonte: "https://drive.prefeitura.sp.gov.br/cidade/secretarias/upload/chamadas/guia_do_centro_2024_site_comprimido_1720210350.pdf",
  },
  "Theatro Municipal": {
    categoria: "Música e patrimônio",
    historia: ["Inaugurado em setembro de 1911, o Theatro Municipal foi projetado pelo escritório de Ramos de Azevedo com a colaboração de Cláudio e Domiziano Rossi.", "O edifício recebeu a Semana de Arte Moderna de 1922 e permanece ligado à música, à ópera e à dança. Visitas educativas permitem conhecer seu patrimônio, conforme agendamento."],
    atracoes: ["Ópera, música e dança, conforme programação.", "Arquitetura e salões históricos.", "Visitas educativas ao complexo e à Praça das Artes."],
    endereco: "Praça Ramos de Azevedo, s/n — Sé, São Paulo — SP.",
    metro: "Estações República ou Anhangabaú, conforme o percurso escolhido.",
    horarios: "Visitas educativas e espetáculos seguem a programação oficial; não há um horário único de visita ao interior. Consulte datas e disponibilidade.",
    precos: "Visitas educativas gratuitas, mediante reserva e disponibilidade. Espetáculos têm preços específicos por apresentação.",
    dicas: ["Reserve a visita educativa pela plataforma indicada no site oficial.", "Confira o ingresso específico do espetáculo: apresentação e visita educativa são atividades distintas."],
    fonte: "https://theatromunicipal.org.br/visitas-educativas/",
  },
};

export const placeDetails: PlaceDetails[] = lugares.map((lugar) => ({
  ...lugar,
  slug: getPlaceSlug(lugar.nome),
  ...information[lugar.nome],
}));

export function findPlace(slug: string) {
  return placeDetails.find((lugar) => lugar.slug === slug);
}