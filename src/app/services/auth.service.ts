import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {Firestore} from '@angular/fire/firestore'
import {async} from '@angular/core/testing'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public AFauth: Auth,
               private router: Router,
              private db: Firestore) { }

    async sendVerificationEmail(): Promise<void> {
      return (await this.AFauth.currentUser).sendEmailVerification();
    }
    login(email:string, password: string){

      return new Promise((resolve, rejected) =>{
        this.AFauth.singInWithEmailAndPassword(email, password).then(user =>{
          if (user.user.emailVerified ==true){
            resolve(user);
          } else if (user.user.emailVerified == false){
            this.AFauth.signOut();
            alert('el correo no esta verificado, porfavor revise su correo para entrar a la aplicacion');
          }
        }).catch((err: any) => rejected(err));
      })
    
    }

    logOut(){
      this.AFauth.signOut().then(()=>{
        this.router.navigate(['/login']);
      })
    }
}
