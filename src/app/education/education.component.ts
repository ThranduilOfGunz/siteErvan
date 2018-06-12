import { EtudeModel } from './../shared/models/etude.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

    etudes: FirebaseListObservable<EtudeModel[]>;
    cardSelectione: EtudeModel;
    video: SafeHtml = null;
    constructor(db: AngularFireDatabase, private ds: DomSanitizer) {
        this.etudes = db.list('/etudes');
     }

    ngOnInit() {
    }

    selectionCard(item: EtudeModel) {
        if (this.cardSelectione === item) {
            this.cardSelectione = null;
        } else {
            this.cardSelectione = item;
            if (item.lienVideo) {
                this.video = this.ds.bypassSecurityTrustResourceUrl(item.lienVideo);
                console.log(this.video);
            } else {
                this.video = null;
            }
        }

        console.log(this.cardSelectione);
    }


    color(element, color) {

        console.log('Dessus');
    }

}
