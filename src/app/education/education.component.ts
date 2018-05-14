import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }


    color(element, color) {

        console.log('Dessus');
    }

}
