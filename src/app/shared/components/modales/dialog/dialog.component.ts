import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DialogModel } from '../../../models/dialog.model';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { DonneesModalExperienceModel } from '../../../models/donnees-modal-experience.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

   titre: string;
   anneeDebut: string;
   anneeFin: string;
   contenu: string;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DonneesModalExperienceModel) {
      this.anneeDebut = data.anneeDebut;
      this.anneeFin = data.anneeFin;
      this.contenu = data.contenu;
      this.titre = data.titre;

    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
