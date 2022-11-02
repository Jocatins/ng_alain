/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { LoadingService, LoadingType } from '@delon/abc/loading';
import { STColumn, STComponent } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';

import { ProductsService } from '../products.service';
import { IProductList } from './product';

@Component({
  selector: 'app-products-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductsProductListComponent implements OnInit {
  @ViewChild('st') private readonly st!: STComponent;
@Input()
public props: any;

@Output()
public propsChange: EventEmitter<string> = new EventEmitter();

  private apiUrl: string = 'https://fakestoreapi.com/products';
  public products: IProductList[] = [];

  constructor(private http: _HttpClient, private productsService: ProductsService, private loadingSrv: LoadingService) {}
  /* eslint-disable-next-line */
  ngOnInit(): void {
    this.getAllProducts();
  }
  fileTypes = ['.xlsx', '.docx', '.pptx', '.pdf'];

  searchSchema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '编号'
      }
    }
  };

  columns: STColumn[] = [
    { title: 'Category', index: 'category' },
    { title: 'Description', index: 'description' },
    { title: 'Price', type: 'number', index: 'price' },
    { title: 'Image', type: 'img', width: '50px', index: 'image' },
    // { title: 'Belts', type: 'date', index: 'updatedAt' },
    { title: 'Rating', type: 'number', index: 'rating.rate' },
    {
      title: '',
      buttons: [
        {
          text: 'Edit',
          click: (item: IProductList) => {
            console.log(item.id);
          }
        }
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
      ]
    }
  ];

  show(type: LoadingType): void {
    this.loadingSrv.open({ type });
    setTimeout(() => this.loadingSrv.close(), 1000 * 3);
  }

  submitData(value: IProductList) {
    let body = {
      price: value.price,
      title: value.title,
      description: value.description
    };
  }
  updateData(value: IProductList) {
    let body = {
      price: value.price,
      title: value.title,
      description: value.description
    };
  }

  getAllProducts(): void {
    this.productsService.getData().subscribe(data => {
      console.log('data', data);
      this.products = data;
    });
  }
  postProducts(body: IProductList): void {
    this.productsService.postData(body).subscribe(response => {
      console.log(response);
    });
  }
  updateProducts(body: IProductList, id: number): void {
    this.productsService.updateData(body, 4).subscribe(response => {
      console.log(response);
    });
  }
  deleteProduct(id: any) {
    this.productsService.deleteData(id).subscribe(response => {
      console.log(response);
    });
  }
}
