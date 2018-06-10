import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AngularFireDatabase]
})
export class HomeComponent implements OnInit {
    nameObservable: Observable<Name[]>;
  value = '';
  items: Observable<any[]>;
  public names: FirebaseListObservable<Name[]>;
  private nameCounter = 0;


  constructor(db: AngularFireDatabase) {
      this.nameCounter = 0;
    this.names = db.list('/names');
  }
  ngOnInit() {
  }

  public addNames(): void {
    const newName = new Name();
    newName.name = this.value + '  ' + this.nameCounter++;
    this.names.push(newName);
}
 suppression() {
    this.names.remove();
 }


//   getCourses(listPath): Observable<any[]> {
//       console.log(this.db.list(listPath).valueChanges());
//     return this.db.list(listPath).valueChanges();
//   }

  getUrl() {
    return 'url(../../assets/images/hogwarts_wallpapers.jpg)';
  }
}

export class Name {
    name: string;
}
