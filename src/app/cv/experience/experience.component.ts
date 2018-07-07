import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../shared/components/modales/dialog/dialog.component';

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
    console.log('Tu as clicqué sur ' + valeur);
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
