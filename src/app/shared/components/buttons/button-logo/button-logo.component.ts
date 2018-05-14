import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-logo',
  templateUrl: './button-logo.component.html',
  styleUrls: ['./button-logo.component.css']
})
export class ButtonLogoComponent implements OnInit {

  @Input() logo: string;
  @Input() chemin: string;
  @Input() title: string;
  @Input() couleur: string;

  color = 'navyBlue';
  private debutChemin: string;
  constructor() { }

  ngOnInit() {
  }

}
