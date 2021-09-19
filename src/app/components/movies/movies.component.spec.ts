import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { moviesComponent } from './movies.component';

describe('moviesComponent', () => {
  let component: moviesComponent;
  let fixture: ComponentFixture<moviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ moviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(moviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
