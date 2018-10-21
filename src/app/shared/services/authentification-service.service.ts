import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { FirebaseApp } from 'angularfire2';
import { environment } from './../../../environments/environment';

@Injectable()
export class AuthentificationServiceService {
    utilisateur: Observable<firebase.UserInfo>;
    authentifie: BehaviorSubject<boolean> = new BehaviorSubject(true);
    auth;
    constructor(private fb: FirebaseApp) {
        this.authentifie.next(false);
        firebase.initializeApp(environment.firebase, 'siteervan');
        this.auth = this.fb.auth();
    }

    login() {
        this.auth.signInWithEmailAndPassword('ervanrenault@gmail.com', 'sephiroth7').then(firebaseUser => {
            this.authentifie.next(true);
        })
       .catch(function(error) {

       });
    }

    logout() {
         // this.af.auth.signOut();
        this.authentifie.next(false);
    }
}
