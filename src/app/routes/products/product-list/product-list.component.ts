import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingService, LoadingType } from '@delon/abc/loading';
import { STColumn, STComponent } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';

import { IProductList } from './product';

@Component({
  selector: 'app-products-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductsProductListComponent implements OnInit {
  fileTypes = ['.xlsx', '.docx', '.pptx', '.pdf'];

  url = `/`;
  searchSchema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '编号'
      }
    }
  };
  @ViewChild('st') private readonly st!: STComponent;
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
        { text: 'Edit', click: (item: any) => `/form/${item.id}` }
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
      ]
    }
  ];
  private apiUrl: string = 'https://fakestoreapi.com/products';
  public products: IProductList[] = [];

  constructor(private http: _HttpClient, private modal: ModalHelper, private loadingSrv: LoadingService) {}
  /* eslint-disable-next-line */
  ngOnInit(): void {
    // this.productSrv.getProducts().subscribe(data => (this.products = data));
    // console.log('data', this.products);
    this.loadData();
  }
  loadData(): void {
    console.log('hello');
    this.show('spin');
    this.http.get<IProductList[]>(`https://fakestoreapi.com/products`).subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }
  show(type: LoadingType): void {
    this.loadingSrv.open({ type });
    setTimeout(() => this.loadingSrv.close(), 1000 * 3);
  }

  add(): void {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }
}
