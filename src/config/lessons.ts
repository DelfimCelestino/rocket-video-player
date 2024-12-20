export interface Lesson {
  date: string;
  title: string;
  isReleased: boolean;
  type: "AO VIVO" | "AULA PRÁTICA";
  videoId: string;
  description: string;
}

export const LESSONS: Lesson[] = [
  {
    date: "Domingo • 20 de junho • 19h00",
    title: "Resolvendo um bug com Javascript",
    isReleased: true,
    type: "AO VIVO",
    videoId: "GTyWrrX4UMo",
    description:
      "Nessa aula vamos explorar um bug comum em aplicações Javascript e aprender as melhores práticas para resolver problemas similares. Vamos abordar debugging, análise de código e implementação de soluções robustas.",
  },
  {
    date: "Segunda • 21 de junho • 19h00",
    title: "Aula 01 - Criando o projeto e realizando o setup inicial",
    isReleased: true,
    type: "AULA PRÁTICA",
    videoId: "YBp1BQd9mKY",
    description:
      "Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.",
  },
  {
    date: "Terça • 22 de junho • 19h00",
    title: "Aula 02 - Implementando o layout da aplicação",
    isReleased: true,
    type: "AULA PRÁTICA",
    videoId: "YBp1BQd9mKY",
    description:
      "Nessa aula vamos implementar o layout da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também criar os componentes necessários para a navegação entre as páginas da aplicação.",
  },
  {
    date: "Quarta • 23 de junho • 19h00",
    title: "Aula 03 - Construindo a área do player e navegação",
    isReleased: false,
    type: "AULA PRÁTICA",
    videoId: "YBp1BQd9mKY",
    description:
      "Nessa aula vamos construir a área do player e implementar a navegação entre as páginas da aplicação utilizando ReactJS, Vite e TailwindCSS.",
  },
  {
    date: "Quinta • 24 de junho • 19h00",
    title: "Aula 04 - Configurando estado global e queries",
    isReleased: false,
    type: "AULA PRÁTICA",
    videoId: "YBp1BQd9mKY",
    description:
      "Nessa aula vamos configurar o estado global e implementar queries utilizando ReactJS, Vite e TailwindCSS.",
  },
  {
    date: "Sexta • 25 de junho • 19h00",
    title: "Aula 05 - Finalizando o front-end da aplicação",
    isReleased: false,
    type: "AULA PRÁTICA",
    videoId: "YBp1BQd9mKY",
    description:
      "Nessa aula vamos finalizar o front-end da aplicação utilizando ReactJS, Vite e TailwindCSS.",
  },
  {
    date: "Sábado • 26 de junho • 19h00",
    title: "Encerramento do Ignite Lab",
    isReleased: false,
    type: "AO VIVO",
    videoId: "YBp1BQd9mKY",
    description:
      "Nesse evento você vai aprender tudo o que aprendeu durante o Ignite Lab e terá a oportunidade de praticar tudo o que aprendeu.",
  },
];
