import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVoyageComponent } from './home-voyage.component';

describe('HomeVoyageComponent', () => {
  let component: HomeVoyageComponent;
  let fixture: ComponentFixture<HomeVoyageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeVoyageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
