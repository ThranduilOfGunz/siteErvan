import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLogoComponent } from './button-logo.component';

describe('ButtonLogoComponent', () => {
  let component: ButtonLogoComponent;
  let fixture: ComponentFixture<ButtonLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
