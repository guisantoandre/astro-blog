import type { ImageMetadata } from "astro";

import ImgChips from "../assets/images/posts/chip.png";
import ImgJs from "../assets/images/posts/js-code.png";
import ImgIa from "../assets/images/posts/ia.png";
import ImgPerformance from "../assets/images/posts/laptop.png";
import ImgIaDaily from "../assets/images/posts/ia-brain.png";
import ImgWebFast from "../assets/images/posts/code-web.png";

export interface Post {
   id: number;
   tags: string[];
   title: string;
   description: string;
   date: string;
   image: ImageMetadata;
   slug: string;
}

export const posts: Post[] = [
   {
      id: 1,
      tags: ["TECH", "ELETRONICA"],
      title: "Chips cada vez mais inteligentes",
      description:
         "Os chips modernos já não se limitam a processar dados — eles começam a tomar decisões em tempo real. Com IA embarcada e maior eficiência energética, o hardware está se tornando tão dinâmico quanto o software.",
      date: "19/04/26",
      image: ImgChips,
      slug: "chips-cada-vez-mais-inteligentes",
   },
   {
      id: 2,
      tags: ["CODE"],
      title: "O futuro do JavaScript",
      description:
         "O JavaScript continua evoluindo rapidamente, com novas features surgindo a cada versão. Mas será que estamos caminhando para um ecossistema mais simples ou ainda mais fragmentado? Analisamos as propostas do TC39.",
      date: "01/01/26",
      image: ImgJs,
      slug: "o-futuro-do-javascript",
   },
   {
      id: 3,
      tags: ["IA"],
      title: "IA no dia a dia",
      description:
         "A inteligência artificial já não é mais coisa do futuro. De recomendações em apps até automações complexas, ela está moldando como vivemos — muitas vezes sem percebermos sua presença silenciosa.",
      date: "05/03/26",
      image: ImgIaDaily,
      slug: "ia-no-dia-a-dia",
   },
   {
      id: 4,
      tags: ["WEB"],
      title: "Performance importa",
      description:
         "Um site rápido não é só agradável — ele impacta diretamente SEO, conversão e retenção de usuários. Pequenos detalhes no carregamento de assets fazem toda a diferença no faturamento final.",
      date: "01/01/26",
      image: ImgPerformance,
      slug: "performance-importa",
   },
   {
      id: 5,
      tags: ["IA"],
      title: "Código que escreve código",
      description:
         "Ferramentas de IA já conseguem gerar funções inteiras a partir de poucas instruções. Isso acelera o desenvolvimento, mas também levanta uma questão: qual será o papel do programador humano amanhã?",
      date: "23/02/26",
      image: ImgIa,
      slug: "codigo-que-escreve-codigo",
   },
   {
      id: 6,
      tags: ["TECH", "CODE"],
      title: "A web mais rápida",
      description:
         "Novas abordagens como rendering híbrido e otimização extrema de assets estão transformando a experiência online. A busca pela latência zero nunca foi tão importante para o mercado.",
      date: "15/04/26",
      image: ImgWebFast,
      slug: "a-web-mais-rapida",
   },
];
