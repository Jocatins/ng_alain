import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// import { _HttpClient } from '@delon/theme';
import { IProductList } from './product-list/product';

@Injectable()
export class ProductsService {
  private apiUrl: string = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  public getData(): Observable<IProductList[]> {
    return this.http.get<IProductList[]>(`${this.apiUrl}`);
  }
  
  public postData(data: IProductList): Observable<IProductList[]> {
    return this.http.post<IProductList[]>(`${this.apiUrl}`, data);
  }
  public updateData(data: any, id: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, data);
  }
  public deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
 