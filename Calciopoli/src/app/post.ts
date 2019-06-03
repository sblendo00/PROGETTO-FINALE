import { Comment } from './comment';

export class Post
{
  nome: string;
  cognome: string;
  ruolo: string;
  prezzo: number;
  piede: string;
  nazione: string;
  nomeAllenatore: string;
  cognomeAllenatore: string;
  emailAllenatore: string;
  squadra: string;
  data: string;
  commenti: Comment[];
}
