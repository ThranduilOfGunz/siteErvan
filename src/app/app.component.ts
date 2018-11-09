import { Observable } from 'rxjs/Observable';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
    constructor() {
        localStorage.removeItem('firebase:previous_websocket_failure');
    }

}
