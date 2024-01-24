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

}
