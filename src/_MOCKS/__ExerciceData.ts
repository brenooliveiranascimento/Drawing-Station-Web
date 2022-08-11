/* eslint-disable import/prefer-default-export */
import firebase from '../Services/firebase_connection';

export const exerciceBaseData = {
  basics: [
    {
      name: 'Degrade',
      dificulty: 'basics',
      finished: true,
      description: 'Exercicio introdutorio',
      url: 'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2Fdegrade.jpg?alt=media&token=fadab5e1-d5a9-45fb-8d4c-50d7eec214ed',
      video: 'DXqcoe8bSKM',
      multiExample: true,
      id: 'Degrade',
      colors: {
        red: [
          { cor: 'Preto' },
          { cor: 'cinza Escuro' },
          { cor: 'Vermelho Escuro' },
          { cor: 'vermelho' },
          { cor: 'rosa Claro' },
          { cor: 'Branco' },
        ],
        green: [
          { cor: 'Preto' },
          { cor: 'cinza Escuro' },
          { cor: 'Verde' },
          { cor: 'Verde claro' },
          { cor: 'Branco' },
        ],
        blue: [
          { cor: 'Preto' },
          { cor: 'cinza Escuro' },
          { cor: 'Azul turquesa' },
          { cor: 'Azul real' },
          { cor: 'azul' },
          { cor: 'Branco' },
        ],
      },
    },
    {
      name: 'Bola',
      dificulty: 'basics',
      finished: true,
      description: 'Exercicio de profundidade',
      url: 'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2FcapaBolinha.png?alt=media&token=c7687d41-3ebf-42f2-bd47-230a199ea2ec',
      video: 'SMXCMsgJo6Y',
      multiExample: false,
      id: 'ball',
      colors: [
        { cor: 'Preto' },
        { cor: 'marrom' },
        { cor: 'cinza Escuro' },
        { cor: 'Vermelho Escuro' },
        { cor: 'vermelho' },
        { cor: 'rosa Claro' },
        { cor: 'Branco' },
      ],
    },
    {
      name: 'Pétala',
      dificulty: 'basics',
      finished: true,
      description: 'Praticando um pouco mais',
      url: 'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2FcapaPetalas.jpg?alt=media&token=24064f35-3bdc-41c1-b93c-a22b10bfbcad',
      video: 'yZ7qqDUzMFc',
      multiExample: false,
      id: 'petal',
      colors: [
        { cor: 'preto' },
        { cor: 'Cinza escuro' },
        { cor: 'Vermelho escuro' },
        { cor: 'Vermelho' },
        { cor: 'Carmim' },
        { cor: 'Rosa claro' },
        { cor: 'Branco' },
      ],
    },
    {
      name: 'Rosa',
      dificulty: 'basics',
      finished: true,
      description: 'Desenho mais complexo',
      url: 'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2FcapaRosa.jpg?alt=media&token=bba4de36-afe5-4e6a-bbd7-9785fa1a3cb2',
      video: 'MhDWTg7vdkI',
      multiExample: false,
      id: 'rose',
      colors: [
        { cor: 'preto' },
        { cor: 'Cinza escuro' },
        { cor: 'Vermelho escuro' },
        { cor: 'Vermelho' },
        { cor: 'Rosa claro' },
        { cor: 'Verde' },
        { cor: 'Verde pinho' },
        { cor: 'Verde folha' },
        { cor: 'Verde claro' },
        { cor: 'Branco' },
      ],
    },
  ],
  intermediary: [
    {
      name: 'Cabelo curto',
      dificulty: 'intermediary',
      finished: false,
      id: 'shortHair',
      descricao: 'cabelo castanho curto',
      url: 'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2FCapaCavelo.png?alt=media&token=82f72d1f-d81a-45fe-9bda-eb4b9cc1a265',
    },
    {
      name: 'Rosa Azul',
      dificulty: 'intermediary',
      finished: false,
      id: 'blueRose',
      descricao: 'Rosa Azul com fundo',
      url: 'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/rosaicon.jpg?alt=media&token=7d2640a3-624a-4c73-96d3-12de0d478e5d',
    },
  ],
  advanced: [
    {
      name: 'Terry Crews',
      dificulty: 'advanced',
      id: 'Terry',
      finished: false,
      descricao: 'Em Breve',
      url: 'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2FIMG_20220206_140140_972.jpg?alt=media&token=23432fec-dbc8-462f-8120-e3770f26b908',
    },
    {
      name: 'Hulk Buster',
      dificulty: 'advanced',
      id: 'HulkBuster',
      finished: false,
      descricao: 'Em Breve',
      url: 'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2FIMG_20220206_150724_464%20(1).jpg?alt=media&token=b0241de3-8964-4c31-aa17-10d7855301cc',
    },
  ],
};

const comments = [
  {
    exercice: 'Name of exerciceeee',
    nameOfCreator: 'UserName',
    coment: 'coment body',
    id: `${new Date().getMinutes()}${new Date().getFullYear()}${new Date().getDay()}${new Date().getMilliseconds()}`,
    ProfilePhoto: 'profile photo',
    uidOfCreator: 'user id',
    subComents: [
      {
        creator: '',
      },
    ],
  },
  {
    exercice: 'Name of exerciceeee',
    nameOfCreator: 'UserName',
    coment: 'coment body',
    id: `${new Date().getMinutes()}${new Date().getFullYear()}${new Date().getDay()}${new Date().getMilliseconds()}`,
    ProfilePhoto: 'profile photo',
    uidOfCreator: 'user id',
    subComents: [],
  },
];

// const setCommentsTest = async () => {
//   firebase.firestore().collection('comments').doc('data').set({ comments })
//     .then(() => alert('dwaio'));
// };
// setCommentsTest();

export const modules = [
  {
    name: 'Praticando pintura', id: 'Pintura', details: 'Hora de por a mão na massa!!', conclude: true, image: 'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/capas%2FcapaRosa.jpg?alt=media&token=bba4de36-afe5-4e6a-bbd7-9785fa1a3cb2',
  },
  {
    name: 'Materiais', id: 'Materiais', details: 'Materiais recomendados', conclude: false, image: null,
  },
  {
    name: 'Praticando esboço', id: 'Esboço', details: 'Vamos praticar um pouco de esboço?', conclude: false, image: null,
  },
];

export const userDataBase = (email: any, uid: any, name: any): any => ({
  email,
  uid,
  name,
  progress: {
    basics: {
      Degrade: false,
      Bola: false,
      Pétala: false,
      Rosa: false,
      concldes: 0,
    },
    intermediary: {
      shortHair: false,
      blueRose: false,
      concldes: 0,
    },
    advanced: {
      TerryCrews: false,
      HulkBuster: false,
      concldes: 0,
    },
    all: 0,
  },
});
