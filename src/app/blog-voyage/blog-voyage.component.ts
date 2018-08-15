import { PhotoModel } from './../shared/models/photo.model';
import {
    AngularFireDatabase,
    FirebaseListObservable
} from 'angularfire2/database-deprecated';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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
        private sanitizer: DomSanitizer
    ) {
        this.photoListe = this.db.list('photosBlog');
        this.photoListe.forEach(element => {
            this.numeroImage = element.length;
            element.forEach(res => {
                this.creerUrlImage(res);
            });
        });
    }

    ngOnInit() {}

    ajouterArticle(event) {}

    creerUrlImage(item: PhotoModel): any {
        const image = new Image();
        image.src = item.photo;
        item.photo = image.src;
    }

    getFile(event) {
        this.selectedFile = event.target.files[0];

        const file: File = this.selectedFile;

        this.getBase64(file).then(date => {
            this.image64 = date;
        });
    }

    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    upload() {
        const photo: PhotoModel = new PhotoModel();

        photo.date = String(new Date());
        photo.description = 'Ajout description';
        photo.id = this.numeroImage;
        photo.lieu = 'Paris';
        photo.photo = this.image64;

        this.db.database.ref('photosBlog/photo' + this.numeroImage).set(photo);
    }
}
