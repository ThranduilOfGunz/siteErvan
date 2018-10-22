import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { FirebaseApp } from 'angularfire2';
import { environment } from './../../../environments/environment';
import { ModaleAuthentificationComponent } from '../components/modales/modale-authentification/modale-authentification.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { IdentificationMotDePasse } from '../models/identification-mot-de-passe.model';

@Injectable()
export class AuthentificationServiceService {
    utilisateur: Observable<firebase.UserInfo>;
    authentifie: BehaviorSubject<boolean> = new BehaviorSubject(false);
    auth;

    identification: IdentificationMotDePasse = new IdentificationMotDePasse();
    constructor(private fb: FirebaseApp, public dialog: MatDialog, public snackBar: MatSnackBar) {
        this.authentifie.next(false);
        // firebase.initializeApp(environment.firebase, 'siteervan');
        this.auth = this.fb.auth();
    }

    login() {
        if (!this.authentifie.value) {
            const dialogRef = this.dialog.open(
                ModaleAuthentificationComponent,
                {
                    width: '30%',
                    height: '30%',
                    data: {}
                }
            );

            dialogRef.afterClosed().subscribe(identification => {
                this.identification.email = identification.email;
                this.identification.mdp = identification.mdp;

                this.auth
                    .signInWithEmailAndPassword(
                        this.identification.email,
                        this.identification.mdp
                    )
                    .then(firebaseUser => {
                        this.authentifie.next(true);
                        this.openSnackBar('Bienvenue professeur... 🖖', null)
                    })
                    .catch(error =>  {
                        this.openSnackBar('Oops, vous n\'êtes pas Ervan 🤔', null)
                    });
            });
        }
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
          duration: 2000,
        });
      }

    logout() {
        this.auth.signOut();
        this.identification = new IdentificationMotDePasse();
        this.authentifie.next(false);
    }
}
