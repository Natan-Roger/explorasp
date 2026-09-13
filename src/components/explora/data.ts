import masp from "@/assets/masp.jpg";
import ibirapuera from "@/assets/ibirapuera.jpg";
import beco from "@/assets/beco.jpg";
import pinacoteca from "@/assets/pinacoteca.jpg";
import theatro from "@/assets/theatro.jpg";
import liberdade from "@/assets/liberdade.jpg";
import farol from "@/assets/farol.jpg";
import centro from "@/assets/centro.jpg";

export const categorias = [
  {
    titulo: "Eventos Gratuitos",
    descricao: "Shows, feiras e exposições sem custo espalhados pela cidade.",
    icone: "Ticket",
    imagem: centro,
  },
  {
    titulo: "Eventos Pagos",
    descricao: "Grandes festivais, peças e experiências que valem cada ingresso.",
    icone: "Sparkles",
    imagem: theatro,
  },
  {
    titulo: "Museus e Exposições",
    descricao: "Acervos históricos e mostras contemporâneas imperdíveis.",
    icone: "Landmark",
    imagem: pinacoteca,
  },
  {
    titulo: "Centros Culturais",
    descricao: "Espaços vivos de arte, música, cinema e literatura.",
    icone: "Theater",
    imagem: masp,
  },
  {
    titulo: "Gastronomia",
    descricao: "Da cantina do bairro ao restaurante premiado da Paulista.",
    icone: "UtensilsCrossed",
    imagem: liberdade,
  },
  {
    titulo: "Parques e Lazer",
    descricao: "Verde, ar livre e programação cultural aos fins de semana.",
    icone: "Trees",
    imagem: ibirapuera,
  },
  {
    titulo: "Lugares Históricos",
    descricao: "As ruas, prédios e histórias que formaram São Paulo.",
    icone: "Building2",
    imagem: farol,
  },
  {
    titulo: "Experiências Urbanas",
    descricao: "Arte de rua, roteiros a pé e descobertas fora do óbvio.",
    icone: "Footprints",
    imagem: beco,
  },
] as const;

export const eventos = [
  {
    nome: "Virada Cultural",
    local: "Centro Histórico",
    categoria: "Música",
    gratuito: true,
    imagem: centro,
  },
  {
    nome: "Mostra de Arte Moderna",
    local: "MASP · Av. Paulista",
    categoria: "Exposição",
    gratuito: false,
    imagem: masp,
  },
  {
    nome: "Feira Gastronômica",
    local: "Liberdade",
    categoria: "Gastronomia",
    gratuito: true,
    imagem: liberdade,
  },
  {
    nome: "Concerto de Câmara",
    local: "Theatro Municipal",
    categoria: "Música",
    gratuito: false,
    imagem: theatro,
  },
  {
    nome: "Piquenique Cultural",
    local: "Parque Ibirapuera",
    categoria: "Ar livre",
    gratuito: true,
    imagem: ibirapuera,
  },
  {
    nome: "Roteiro de Arte Urbana",
    local: "Beco do Batman",
    categoria: "Exposição",
    gratuito: false,
    imagem: beco,
  },
] as const;

export const lugares = [
  {
    nome: "MASP",
    descricao: "O vão livre mais icônico da Avenida Paulista.",
    imagem: masp,
  },
  {
    nome: "Parque Ibirapuera",
    descricao: "O pulmão verde e cultural da cidade.",
    imagem: ibirapuera,
  },
  {
    nome: "Beco do Batman",
    descricao: "Galeria de arte urbana a céu aberto na Vila Madalena.",
    imagem: beco,
  },
  {
    nome: "Pinacoteca",
    descricao: "Arte brasileira em um edifício histórico restaurado.",
    imagem: pinacoteca,
  },
  {
    nome: "Farol Santander",
    descricao: "Vista panorâmica de 360° do centro paulistano.",
    imagem: farol,
  },
  {
    nome: "Liberdade",
    descricao: "Cultura oriental, lanternas e feira de fim de semana.",
    imagem: liberdade,
  },
  {
    nome: "Centro Histórico",
    descricao: "Onde São Paulo começou, entre becos e igrejas.",
    imagem: centro,
  },
  {
    nome: "Theatro Municipal",
    descricao: "Ópera, orquestra e arquitetura belle époque.",
    imagem: theatro,
  },
] as const;
