import { Component, OnInit } from '@angular/core';
import { SFSchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-categories-categories-view',
  templateUrl: './categories-view.component.html'
})
export class CategoriesCategoriesViewComponent implements OnInit {
  schema: SFSchema = {
    properties: {
      email: {
        type: 'string',
        title: 'Email',
        format: 'email',
        maxLength: 20
      },
      name: {
        type: 'string',
        title: 'Name',
        minLength: 3
      }
    }
  };

  submit(value: any) {
    console.log('Hello');
  }

  record: any = {};
  i: any;

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, private http: _HttpClient) {}

  ngOnInit(): void {
    this.http.get(`/user/${this.record.id}`).subscribe(res => (this.i = res));
  }

  close(): void {
    this.modal.destroy();
    this.msgSrv.info('hello');
  }
}
