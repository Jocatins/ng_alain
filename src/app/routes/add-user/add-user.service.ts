import { Injectable } from '@angular/core';
import { BaseApi, BaseUrl, Body, GET, Path, POST, Query, _HttpClient } from '@delon/theme';
import { Observable } from 'rxjs';

import { IUserList } from '../users/users-list/users';

// @BaseUrl('https://fakestoreapi.com/users')
@Injectable()
export class AddUserService {
  // GET Request
  // ====================
  // @GET(':id::type')
  // get(@Path('id') id: number): Observable<T> {
  //   return;
  // }
  // GET id request
  // =====================
  // @GET(':id')
  // get(@Path('id') id: number): Observable {
  //   return;
  // }
  // POST request
  // ======================
  // @POST(':id')
  // save(@Path('id') id: number, @Body data: Object): Observable {
  //   return;
  // }
  // @POST()
  // save(@Payload data: {}): Observable {
  //   return;
  // }

  constructor(private http: _HttpClient) {}
}
