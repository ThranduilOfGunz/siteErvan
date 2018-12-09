import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    defaultValue = 'fr';

    langues = [{code: 'FR', value: 'fr'}, {code: 'EN', value: 'en'}]
    constructor(private translate: TranslateService) {

    }
    ngOnInit() {}

    switchLanguage(language: string) {
        this.translate.use(language);
    }
}
