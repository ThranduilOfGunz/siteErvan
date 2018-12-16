import { AffichageFooterService } from './../shared/services/affichage-footer.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators,
    FormControl
} from '@angular/forms';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    defaultValue = 'fr';
    mail = 'ervanrenault@gmail'; // add the links to body
    afficherFooter = true;
    // composeOption: email.ComposeOptions;

    /** Formulaire de contact */
    formulaire: FormGroup;

    langues = [{ code: 'FR', value: 'fr' }, { code: 'EN', value: 'en' }];
    constructor(
        private translate: TranslateService,
        private affichageFooterService: AffichageFooterService,
        private fb: FormBuilder
    ) {
        // this.composeOption = {
        //     to: ['ervanrenault@gmail.com'],
        //     subject: '',
        //     body: ''
        // };
    }
    ngOnInit() {
        this.initialisationFormulaire();
        this.affichageFooterService.affichageObservable.subscribe(
            res => (this.afficherFooter = res)
        );
    }

    initialisationFormulaire() {
        this.formulaire = this.fb.group({
            emailEmetteur: new FormControl(
                '',
                Validators.compose([
                    Validators.required,
                    Validators.pattern(
                        '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'
                    )
                ])
            ),
            message: '',
            titre: ''
        });

        this.formulaire.get('message').setValidators([Validators.required]);
        this.formulaire.get('titre').setValidators([Validators.required]);
    }

    switchLanguage(language: string) {
        this.translate.use(language);
    }

    open(lien: string) {
        switch (lien) {
            case 'facebook':
                window.open('https://www.facebook.com/ErvanRenault', '_blank');
                break;
            case 'instagram':
                window.open('https://www.instagram.com/ervanrenault', '_blank');
                break;
            case 'twitter':
                window.open('https://twitter.com/ErvanRenault', '_blank');
                break;
            case 'mail':
                this.mailMe();
        }
    }

    mailMe() {
        // this.composeOption.body =
        //     this.formulaire.get('message').value +
        //     ' ' +
        //     this.formulaire.get('emailEmetteur').value;
        // this.composeOption.subject = this.formulaire.get('titre').value;
        // email
        //     .available()
        //     .then(available => {
        //         console.log('Service Available');
        //         if (available) {
        //             email
        //                 .compose(this.composeOption)
        //                 .then(result => {
        //                     console.log(result);
        //                     if (result) {
        //                         console.log('Email sent');
        //                     } else {
        //                         console.log('email failed toi send');
        //                     }
        //                 })
        //                 .catch(error => console.log(error));
        //         }
        //     })
        //     .catch(error => console.log(error));
    }
}
