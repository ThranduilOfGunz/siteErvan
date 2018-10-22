import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { FirebaseApp } from 'angularfire2';
import { environment } from './../../../environments/environment';
import { ModaleAuthentificationComponent } from '../components/modales/modale-authentification/modale-authentification.component';
import { MatDialog } from '@angular/material';
import { IdentificationMotDePasse } from '../models/identification-mot-de-passe.model';

@Injectable()
export class AuthentificationServiceService {
    utilisateur: Observable<firebase.UserInfo>;
    authentifie: BehaviorSubject<boolean> = new BehaviorSubject(false);
    auth;

    identification: IdentificationMotDePasse = new IdentificationMotDePasse();
    constructor(private fb: FirebaseApp, public dialog: MatDialog) {
        this.authentifie.next(false);
        // firebase.initializeApp(environment.firebase, 'siteervan');
        this.auth = this.fb.auth();
    }

    login() {
        console.log('login');
        console.log(this.authentifie)
        if (!this.authentifie.value) {
            console.log('auth');

            const dialogRef = this.dialog.open(ModaleAuthentificationComponent, {
                width: '30%',
                height: '25%',
                data: {}
            });

            dialogRef.afterClosed().subscribe(identification => {
                console.log(identification);
                this.identification.email = identification.email;
                this.identification.mdp = identification.mdp;

                this.auth.signInWithEmailAndPassword(this.identification.email, this.identification.mdp).then(firebaseUser => {
                    this.authentifie.next(true);
                })
                    .catch(function (error) {
                    });
            })
        }

    }

    logout() {
        this.auth.signOut();
        this.identification = new IdentificationMotDePasse();
        this.authentifie.next(false);
    }
}
