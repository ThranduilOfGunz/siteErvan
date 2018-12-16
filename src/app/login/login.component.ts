import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthentificationServiceService } from '../shared/services/authentification-service.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    form: FormGroup;
    authentifie = false;
    constructor(
        private auth: AuthentificationServiceService) {
            this.auth.authentifie.subscribe(res => {
                this.authentifie = res;
            });
         }

    ngOnInit() {
        this.initialisationFormulaire();
    }

    initialisationFormulaire() {
        const emailControl = new FormControl('', Validators.required);
        const mdpControl = new FormControl('', Validators.required);

        this.form = new FormGroup({
            email: emailControl,
            mdp: mdpControl,
        });
    }

    login() {
        this.auth.login();
    }

    logout() {
        this.auth.logout();
    }

}
