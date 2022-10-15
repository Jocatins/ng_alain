import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsProductListComponent } from './product-list.component';

describe('ProductsProductListComponent', () => {
  let component: ProductsProductListComponent;
  let fixture: ComponentFixture<ProductsProductListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
