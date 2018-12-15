import { AffichageFooterService } from './../../shared/services/affichage-footer.service';
import { EtudeModel } from './../../shared/models/etude.model';
import { FirebaseService } from './../../shared/services/firebase.service';
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
        private firebase: FirebaseService,
        private affichageFooter: AffichageFooterService
    ) {
    }

    ngOnInit() {
        this.recupererEtudes();
    }

    recupererEtudes() {
        this.affichageFooter.updateData(false);
        this.firebase.getEtudes().subscribe(res => {
            this.etudes = res;
            this.chargement = false;
            this.affichageFooter.updateData(true);
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
