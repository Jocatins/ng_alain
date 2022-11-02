import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IUserList } from '../users/users-list/users';

@Injectable()
export class UsersService {
  private apiUrl: string = 'https://fakestoreapi.com/users';
  constructor(private http: HttpClient) {}

  getData(): Observable<IUserList[]> {
    return this.http.get<IUserList[]>(`${this.apiUrl}`);
  }
  getSingleData(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  postData(data: IUserList): Observable<IUserList[]> {
    return this.http.post<IUserList[]>(`${this.apiUrl}`, data);
  }
  updateData(data: any, id: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, data);
  }
  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
