import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAjoutArcticleComponent } from './modal-ajout-arcticle.component';

describe('ModalAjoutArcticleComponent', () => {
  let component: ModalAjoutArcticleComponent;
  let fixture: ComponentFixture<ModalAjoutArcticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAjoutArcticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAjoutArcticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
