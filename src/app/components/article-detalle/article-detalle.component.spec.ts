import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetalleComponent } from './article-detalle.component';

describe('ArticleDetalleComponent', () => {
  let component: ArticleDetalleComponent;
  let fixture: ComponentFixture<ArticleDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
