import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesCategoriesViewComponent } from './categories-view.component';

describe('CategoriesCategoriesViewComponent', () => {
  let component: CategoriesCategoriesViewComponent;
  let fixture: ComponentFixture<CategoriesCategoriesViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesCategoriesViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesCategoriesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
