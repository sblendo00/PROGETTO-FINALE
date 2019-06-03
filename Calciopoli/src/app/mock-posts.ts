import { Post } from './post';

export const Posts: Post[] = [
  { nome:'Cristiano',
    cognome: 'Ronaldo',
    nazione: 'Portogallo',
    ruolo:'Attaccante',
    prezzo:100000000,
    piede:'Dx',
    nomeAllenatore:'Max',
    cognomeAllenatore:'Allegri',
    emailAllenatore: 'max.allegri@gmail.com',
    squadra:'Napoli',
    data:'13:25, il 23/04/2019',
    commenti:[
      {
        testo:'Fa ridere',
        cognomeAllenatore: 'Sarri',
        nomeAllenatore:'Maurizio',
        squadra:'Chelsea',
        data: '21:50, il 24/04/2019'
      },
      {
        testo:'Yeeees',
        cognomeAllenatore: 'Gattuso',
        nomeAllenatore:'Gennaro',
        squadra:'Milan',
        data: '21:54, il 24/04/2019'
      }]
  },
  { nome:'Lionel',
    cognome: 'Messi',
    nazione: 'Argentina',
    ruolo:'Attaccante',
    prezzo:200000000,
    piede:'Sx',
    nomeAllenatore:'Ernesto',
    cognomeAllenatore:'Valverde',
    emailAllenatore: 'ernesto.valverde@gmail.com',
    squadra:'Barcellona',
    data:'21:37, il 27/04/2019',
    commenti:[
      { testo:'Carica il fucileeeee',
        cognomeAllenatore: 'Mourinho',
        nomeAllenatore:'Josè',
        squadra:'Manchester United',
        data: '15:07, il 29/04/2019'
      }]
  },
  { nome:'Ignazio',
    cognome: 'Abate',
    nazione: 'Italia',
    ruolo:'Terzino',
    prezzo:10000000,
    piede:'Dx',
    nomeAllenatore:'Gennaro',
    cognomeAllenatore:'Gattuso',
    emailAllenatore: 'gennaro.gattuso@gmail.com',
    squadra:'Milan',
    data:'14:56, il 4/07/2018',
    commenti:[
      { testo:'Fa cagare',
        cognomeAllenatore: 'Conte',
        nomeAllenatore:'Antonio',
        squadra:'Inter',
        data: '12:23, il 1/06/2018'
      }]
  },
];
