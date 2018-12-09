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
    mail = 'ervanrenault@gmail'; // add the links to body

    langues = [{ code: 'FR', value: 'fr' }, { code: 'EN', value: 'en' }];
    constructor(private translate: TranslateService) {}
    ngOnInit() {}

    switchLanguage(language: string) {
        this.translate.use(language);
    }

    open(lien: string) {
        switch (lien) {
            case 'facebook':
                window.open('https://www.facebook.com/ErvanRenault', '_blank');
                break;
            case 'instagram':
                window.open('https://www.instagram.com/ervanrenault', '_blank');
                break;
            case 'twitter':
                window.open('https://twitter.com/ErvanRenault', '_blank');
                break;
            case 'mail':
                this.mailMe();
        }
    }

    mailMe() {
        window.open(`mailto:` + this.mail, '_system');
    }
}
