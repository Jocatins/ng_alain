import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateProductsUpdateComponent } from './update.component';

describe('UpdateProductsUpdateComponent', () => {
  let component: UpdateProductsUpdateComponent;
  let fixture: ComponentFixture<UpdateProductsUpdateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProductsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProductsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
