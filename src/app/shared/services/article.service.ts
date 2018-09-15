import { PhotoModel } from './../models/photo.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ArticleService {
    private article = new BehaviorSubject(new PhotoModel());
    articleObservable = this.article.asObservable();

    constructor() {}

    updateData(data: PhotoModel) {
        this.article.next(data);
    }
}
