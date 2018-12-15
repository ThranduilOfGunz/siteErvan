import { AffichageFooterService } from './../shared/services/affichage-footer.service';
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
    afficherFooter = true;

    langues = [{ code: 'FR', value: 'fr' }, { code: 'EN', value: 'en' }];
    constructor(private translate: TranslateService, private affichageFooterService: AffichageFooterService) {}
    ngOnInit() {
        this.affichageFooterService.affichageObservable.subscribe(res => this.afficherFooter = res)
    }

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

    affichageFooter(event) {
        console.log('Event : ', event);
       event === 'chargement' ?  this.afficherFooter = false : this.afficherFooter = true;
    }
}
