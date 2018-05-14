import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogVoyageComponent } from './blog-voyage.component';

describe('BlogVoyageComponent', () => {
  let component: BlogVoyageComponent;
  let fixture: ComponentFixture<BlogVoyageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogVoyageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
