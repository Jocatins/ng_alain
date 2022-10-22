import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SEErrorRefresh } from '@delon/abc/se';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-add-user-log',
  templateUrl: './log.component.html'
})
export class AddUserLogComponent {
  validateForm = new FormGroup({
    userName: new FormControl<string | null>(null, [Validators.required, Validators.pattern(/j/)]),
    password: new FormControl(null, [Validators.required]),
    email: new FormControl<string | null>(null, [Validators.required, Validators.pattern(/^[a-z0-9]*$/)]),
    remember: new FormControl(true)
  });

  i: { ak?: string; sk?: string; ek?: string } = {};
  ngModelErrors: SEErrorRefresh[] = [];
  reactiveErrors: SEErrorRefresh[] = [];

  constructor(public msg: NzMessageService) {}

  resetErrors(): void {
    this.ngModelErrors = [{ name: 'ak', error: 'Required field, and can only contain a-z, 0-9' }];
    this.reactiveErrors = [
      { name: 'userName', error: 'Required username' },
      { name: 'password', error: 'Required password' }
    ];
  }
}
