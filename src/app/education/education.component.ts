import { FirebaseService } from './../shared/services/firebase.service';
import { EtudeModel } from './../shared/models/etude.model';
import {
    AngularFireDatabase,
    FirebaseListObservable
} from 'angularfire2/database-deprecated';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { WriteTreeCompleteChildSource } from '@firebase/database/dist/esm/src/core/view/CompleteChildSource';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
    etudes: FirebaseListObservable<EtudeModel[]>;
    cardSelectionne: EtudeModel;

    colorSelection: EtudeModel;
    estSelectionne = false;
    titreSelection: string;
    detailSelection = '';
    video: SafeHtml = null;
    chargement = true;
    constructor(
        db: AngularFireDatabase,
        private ds: DomSanitizer,
        private firebase: FirebaseService
    ) {
        //  this.etudes = db.list('/etudes');
    }

    ngOnInit() {
        this.recupererEtudes();
    }

    recupererEtudes() {
        this.firebase.getEtudes().subscribe(res => {
            this.etudes = res;
            this.chargement = false;
        });
    }

    selectionCard(item: EtudeModel) {
        if (this.cardSelectionne === item) {
            this.cardSelectionne = null;
        } else {
            this.estSelectionne = true;
            this.cardSelectionne = item;
            if (item.lienVideo) {
                this.video = this.ds.bypassSecurityTrustResourceUrl(
                    item.lienVideo
                );
            } else {
                this.video = null;
            }
            this.titreSelection = item.description;
            this.detailSelection = item.descriptionComplémentaire;
        }
    }
}
