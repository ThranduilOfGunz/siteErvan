import { Component, ViewEncapsulation } from '@angular/core';
import { ng2Parallax  } from '../../node_modules/ang2-parallax/ng2parallax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'app works!';
}
