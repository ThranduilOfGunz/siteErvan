import { ExperienceModel } from './../../../models/experience.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DialogModel } from '../../../models/dialog.model';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DonneesModalExperienceModel } from '../../../models/donnees-modal-experience.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  societe: string;
  date: string;
  anneeFin: string;
  contenu: string;
  duree: number;
  typeDuree: string;
  fonction: string;
  image: string;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { item: ExperienceModel, image: string }) {
    this.contenu = data.item.description;
    this.societe = data.item.societe;
    this.duree = data.item.duree;
    this.typeDuree = data.item.typeDuree;
    this.fonction = data.item.fonction;
    this.date = data.item.date;
    this.image = '../../../../../assets/images/' + data.image;

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
