import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from "../post";
import { Posts } from '../mock-posts';
import { Comment } from '../comment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() nomeAllenatoreOnline;
  @Input() cognomeAllenatoreOnline;
  @Input() squadra;
  @Input () emailAllenatoreOnline;
  calciatoreForm: FormGroup;
  posts = Posts;
  log : boolean = false;

  constructor(fb: FormBuilder) {
    this.calciatoreForm = fb.group({'nome': ['', Validators.required],'cognome': ['', Validators.required], 'ruolo': ['', Validators.required], 'prezzo': ['', Validators.required], 'nazione': ['', Validators.required], 'piede': ['', Validators.required]});
  }

  ngOnInit() {

  }

  aggiungiOggetto(): boolean {

    if(this.calciatoreForm.valid){
      if(this.nomeAllenatoreOnline != null){
        let post: Post = new Post();
        post.nome = this.calciatoreForm.controls['nome'].value;
        post.cognome = this.calciatoreForm.controls['cognome'].value;
        post.ruolo = this.calciatoreForm.controls['ruolo'].value;
        post.prezzo = Number(this.calciatoreForm.controls['prezzo'].value);
        post.piede = this.calciatoreForm.controls['piede'].value;
        post.nazione = this.calciatoreForm.controls['nazione'].value;
        post.nomeAllenatore = this.nomeAllenatoreOnline;
        post.cognomeAllenatore = this.cognomeAllenatoreOnline;
        post.squadra = this.squadra;
        post.emailAllenatore = this.emailAllenatoreOnline;
        let date: Date = new Date();
        post.data = date.getHours() + ':' + date.getMinutes() + ', il ' + date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear();
        post.commenti = [];
        this.posts.push(post);
      }
    } else {
        console.log("Il form non è valido");
    }

    return false;
  }

  commenta(commento: HTMLInputElement, post: Post){
    if(this.nomeAllenatoreOnline != null){
      if(commento.value != ''){
        let comment = new Comment();
        comment.testo = commento.value;
        comment.nomeAllenatore = this.nomeAllenatoreOnline;
        comment.cognomeAllenatore = this.cognomeAllenatoreOnline;
        comment.squadra = this.squadra;
        let date: Date = new Date();
        comment.data = date.getHours() + ':' + date.getMinutes() + ', il ' + date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear();
        post.commenti.push(comment);
        this.log = false;
      } else {
        console.log('Il commento non può essere vuoto');
      }
    } else {
      this.log = true;
    }
  }

}
