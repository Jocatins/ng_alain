import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';

import { IUserList } from '../../users/users-list/users';
import { AddUserService } from '../add-user.service';

@Component({
  selector: 'app-add-user-log',
  templateUrl: './log.component.html'
})
export class AddUserLogComponent implements OnInit {
  public usersForm!: UntypedFormGroup;

  constructor(private msg: NzMessageService, private fb: UntypedFormBuilder, private addUserService: AddUserService) {}

  ngOnInit(): void {
    this.usersForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      mobile: [null, [Validators.required]],
      email: [null, [Validators.required]],
      remember: [true]
    });
  }
  onSubmit(): void {
    if (this.usersForm.valid) {
      console.log('submit successfully', this.usersForm.value);
    } else {
      Object.values(this.usersForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
    this.postUsers(this.usersForm.value);
  }
  submitData(value: IUserList) {
    const body = {
      price: value.username,
      title: value.email,
      description: value.name
    };
  }
  postUsers(body: IUserList) {
    this.addUserService.postData(body).subscribe(response => {
      console.log(response);
    });
  }
}
