import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Allenatore } from "./allenatore";
import { Allenatori } from './mock-allenatori';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myForm: FormGroup;
  LoginForm: FormGroup;
  allenatori = Allenatori;
  nomeAllenatoreOnline: string = null;
  cognomeAllenatoreOnline: string = null;
  squadra:string = null;
  emailAllenatoreOnline : string = null;
  logoutEffettuato: boolean = false;
  schiacciaLogin : boolean = false;
  loginEffettuato: boolean = false;
  registerEffettuato: boolean = false;
  pwemailsbagliata : boolean = false;
  a : boolean = false;
  b : boolean = false;
  l : boolean = false;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({'nome': ['', Validators.required], 'cognome': ['', Validators.required], 'squadra': ['', Validators.required], 'password': ['', Validators.required], 'email': ['', Validators.compose([Validators.required, Validators.email])]});
    this.LoginForm = fb.group({'email': ['', Validators.compose([Validators.required, Validators.email])], 'password': ['', Validators.required]});
  }

    onSubmit(): boolean {
      if(this.myForm.valid){
        let allenatore : Allenatore = new Allenatore();
        allenatore.nome = this.myForm.controls['nome'].value;
        allenatore.cognome = this.myForm.controls['cognome'].value;
        allenatore.squadra = this.myForm.controls['squadra'].value;
        allenatore.password = this.myForm.controls['password'].value;
        allenatore.email = this.myForm.controls['email'].value;
        this.allenatori.push(allenatore);
        this.logoutEffettuato = false
        this.registerEffettuato = true;
      } else {
        console.log("Il form non è valido");
      }

      return false;
    }

    login(): boolean {
      if(this.LoginForm.valid){
        for(let a of this.allenatori){
          if(this.LoginForm.controls['email'].value == a.email){
            if(this.LoginForm.controls['password'].value == a.password){
              this.cognomeAllenatoreOnline = a.cognome;
              this.nomeAllenatoreOnline = a.nome;
              this.squadra = a.squadra;
              this.emailAllenatoreOnline = a.email;
              this.logoutEffettuato = false;
              this.schiacciaLogin = true;
              this.loginEffettuato = true;
              this.pwemailsbagliata = false;
              this.l = true;
              break;
            } else {
              this.pwemailsbagliata = true;
            }
          } else {
            this.pwemailsbagliata = true;
          }
        }
      } else {
        console.log("Il form non è valido");
      }

      return false;
    }

    logout(){
        this.nomeAllenatoreOnline = null;
        this.cognomeAllenatoreOnline = null;
        this.squadra = null;
        this.emailAllenatoreOnline = null;
        this.logoutEffettuato = true;
        this.schiacciaLogin = false;
        this.loginEffettuato = false;
        this.l = false;
    }

    hidea(){
        if (this.a == false){
            this.a = true;
        }else{
            this.a = false;
        }
    }

    hideb(){
        if (this.b == false){
            this.b = true;
        }else{
            this.b = false;
        }
    }
}


