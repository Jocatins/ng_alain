import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CartItemsLogComponent } from './log.component';

describe('CartItemsLogComponent', () => {
  let component: CartItemsLogComponent;
  let fixture: ComponentFixture<CartItemsLogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CartItemsLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
