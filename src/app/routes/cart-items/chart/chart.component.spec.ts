import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CartItemsChartComponent } from './chart.component';

describe('CartItemsChartComponent', () => {
  let component: CartItemsChartComponent;
  let fixture: ComponentFixture<CartItemsChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CartItemsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
