import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaleAuthentificationComponent } from './modale-authentification.component';

describe('ModaleAuthentificationComponent', () => {
  let component: ModaleAuthentificationComponent;
  let fixture: ComponentFixture<ModaleAuthentificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaleAuthentificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaleAuthentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
