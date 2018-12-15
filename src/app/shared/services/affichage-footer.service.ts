import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

@Injectable()
export class AffichageFooterService {

    private affichage = new BehaviorSubject(true);
    affichageObservable = this.affichage.asObservable();

    constructor() {}

    updateData(data: boolean) {
        this.affichage.next(data);
    }

}
