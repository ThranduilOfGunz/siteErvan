import { FirebaseService } from './../shared/services/firebase.service';
import { MatDialog } from '@angular/material';
import { PhotoModel } from './../shared/models/photo.model';
import { Component, OnInit } from '@angular/core';
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
    numeroImage = 0;
    chargement = true;

    photoListe: PhotoModel[];

    constructor(
        public dialog: MatDialog,
        private router: Router,
        private articleService: ArticleService,
        private fireBaseService: FirebaseService
    ) {}

    ngOnInit() {
        this.fireBaseService.getArticles().subscribe(
            res => {
                this.photoListe = res;
                this.photoListe.forEach(element => {
                    if (element.id >= this.numeroImage) {
                        this.numeroImage = element.id + 1;
                    }
                });
                this.chargement = false;
            },
            error => {},
            () => {
                this.chargement = false;
            }
        );
    }

    ajouterArticle() {
        const dialogRef = this.dialog.open(ModalAjoutArcticleComponent, {
            width: '70%',
            height: '70%',
            data: { idImage: this.numeroImage }
        });

        dialogRef.afterClosed().subscribe(result => {});
    }

    goToDetailArticle(item: PhotoModel) {
        this.articleService.updateData(item);
        this.router.navigate(['/details-article']);
    }
}
