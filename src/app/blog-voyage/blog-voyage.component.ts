import { MatDialog } from '@angular/material';
import { PhotoModel } from './../shared/models/photo.model';
import {
    AngularFireDatabase,
    FirebaseListObservable
} from 'angularfire2/database-deprecated';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalAjoutArcticleComponent } from '../shared/components/modales/modal-ajout-arcticle/modal-ajout-arcticle.component';
import { Router } from '@angular/router';
import { ArticleService } from '../shared/services/article.service';

@Component({
    selector: 'app-blog-voyage',
    templateUrl: './blog-voyage.component.html',
    styleUrls: ['./blog-voyage.component.css']
})
export class BlogVoyageComponent implements OnInit {
    selectedFile: File = null;
    url: any;
    imageToShow: any;
    sanitizedUrl: any;
    image64: any;
    numeroImage: number;

    photoListe: FirebaseListObservable<PhotoModel[]>;

    constructor(
        private http: HttpClient,
        private db: AngularFireDatabase,
        private sanitizer: DomSanitizer,
        public dialog: MatDialog,
        private router: Router,
        private articleService: ArticleService
    ) {
        this.photoListe = this.db.list('photosBlog');
        this.photoListe.forEach(element => {
            if (element) {
                this.numeroImage = element.length + 1;
            }
            element.forEach(res => {
                this.creerUrlImage(res);
            });
        });
    }

    ngOnInit() {}

    creerUrlImage(item: PhotoModel): any {
        const image = new Image();
        image.src = item.photo;
        item.photo = image.src;
    }

    ajouterArticle() {
        const dialogRef = this.dialog.open(ModalAjoutArcticleComponent, {
            width: '70%',
            height: '70%',
            data : {idImage: this.numeroImage}
        });

        dialogRef.afterClosed().subscribe(result => {});
    }

    goToDetailArticle(item: PhotoModel) {
        console.log(item);
        this.articleService.updateData(item);
        this.router.navigate(['/details-article']);
    }
}
