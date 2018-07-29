import { MatSnackBar } from '@angular/material';
import { SnackBarComponent } from './../shared/components/snack-bar/snack-bar.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  constructor( public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  versExperience(event) {
      if (event.index === 1) {
          this.openSnackBar();
      }
  }

  openSnackBar() {
  this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 3000,
    });
}

}
