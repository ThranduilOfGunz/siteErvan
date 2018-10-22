import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IdentificationMotDePasse } from '../../../models/identification-mot-de-passe.model';

@Component({
    selector: 'app-modale-authentification',
    templateUrl: './modale-authentification.component.html',
    styleUrls: ['./modale-authentification.component.css']
})
export class ModaleAuthentificationComponent implements OnInit {

    form: FormGroup;
    constructor(
        public dialogRef: MatDialogRef<ModaleAuthentificationComponent>,
        @Inject(MAT_DIALOG_DATA) public data: {}
    ) { }

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

    valider() {
        const data: IdentificationMotDePasse = {
            email: this.form.get('email').value,
            mdp: this.form.get('mdp').value
        }

        this.dialogRef.close(data);
    }

}
