import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IUserList } from '../users/users-list/users';

@Injectable()
export class AddUserService {
  private apiUrl: string = 'https://fakestoreapi.com/users';
  constructor(private http: HttpClient) {}

  postData(data: IUserList): Observable<IUserList[]> {
    return this.http.post<IUserList[]>(`${this.apiUrl}`, data);
  }
}
