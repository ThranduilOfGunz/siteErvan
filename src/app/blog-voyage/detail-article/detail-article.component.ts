import { PhotoModel } from './../../shared/models/photo.model';
import { ArticleService } from './../../shared/services/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-detail-article',
    templateUrl: './detail-article.component.html',
    styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
    article: PhotoModel;
    constructor(private articleService: ArticleService) {}

    ngOnInit() {
        this.articleService.articleObservable.subscribe(article => {
            this.article = article;
            this.article.date = (article.date);
        });
    }
}
