import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang('en');
        localStorage.removeItem('firebase:previous_websocket_failure');
    }

    switchLanguage(language: string) {
        this.translate.use(language);
    }
}
