import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../shared/components/modales/dialog/dialog.component';
import { DonneesModalExperienceModel } from '../../shared/models/donnees-modal-experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  clickImage(valeur: string) {
    const data: DonneesModalExperienceModel = {
        anneeDebut: '12/12/2012',
        anneeFin: '12/12/2013',
        contenu: 'Blabla',
        titre: valeur
    }
    console.log('Tu as clicqué sur ' + valeur);
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
