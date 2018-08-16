import { PhotoModel } from './../../../models/photo.model';
import { DialogComponent } from './../dialog/dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-modal-ajout-arcticle',
    templateUrl: './modal-ajout-arcticle.component.html',
    styleUrls: ['./modal-ajout-arcticle.component.css']
})
export class ModalAjoutArcticleComponent implements OnInit {
    formulaireAjoutArticle: FormGroup;
    image64: any;
    photoSelectionnee: File = null;

    constructor(public dialogRef: MatDialogRef<ModalAjoutArcticleComponent>) {}

    ngOnInit() {
        this.initialisationFormulaire();
    }

    initialisationFormulaire() {
        const titreControl = new FormControl(
            '', Validators.required
        );
        const descriptionControl = new FormControl(
            '',
            Validators.required
        );
        const dateControl = new FormControl('', Validators.required);
        const lieuControl = new FormControl('', Validators.required);
        this.formulaireAjoutArticle = new FormGroup({
            titre: titreControl,
            description: descriptionControl,
            date: dateControl,
            lieu: lieuControl
        });
    }

    getFile(event) {
        this.photoSelectionnee = event.target.files[0];

        const file: File = this.photoSelectionnee;

        this.getBase64(file).then(date => {
            this.image64 = date;
        });
    }

    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
}
