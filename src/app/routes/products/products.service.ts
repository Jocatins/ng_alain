import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// import { _HttpClient } from '@delon/theme';
import { IProductList } from './product-list/product';

// type of httpResponse
type ProductListResponseType = HttpResponse<IProductList[]>;

@Injectable()
export class ProductsService {
  private apiUrl: string = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) {}

  // getProducts(): Observable<ProductListResponseType> {
  //   return this.http.get<IProductList[]>(this.apiUrl, { observe: 'response' });
  // }
  getProducts(): Observable<IProductList[]> {
    return this.http.get<IProductList[]>(this.apiUrl);
  }
}
