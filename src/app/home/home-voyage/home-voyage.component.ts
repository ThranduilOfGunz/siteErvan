import { Component, OnInit } from '@angular/core';
import { Config } from 'ngx-countdown';

@Component({
  selector: 'app-home-voyage',
  templateUrl: './home-voyage.component.html',
  styleUrls: ['./home-voyage.component.css']
})
export class HomeVoyageComponent implements OnInit {

  config: Config = {
    leftTime: Math.abs((new Date('12/27/2018').getTime() - new Date().getTime()) / 1000),
    template: '$!d!:$!h!:$!m!:$!s!'
  };
  constructor() { }

  ngOnInit() {
  }

}
