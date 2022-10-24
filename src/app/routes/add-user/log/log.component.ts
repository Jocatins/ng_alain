import { Component } from '@angular/core';
import { UntypedFormGroup, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-add-user-log',
  templateUrl: './log.component.html'
})
export class AddUserLogComponent {
  // validateForm!: UntypedFormGroup;

  public usersForm: FormGroup = this.formBuilder.group({
    userName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    mobile: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true]
  });

  constructor(private msg: NzMessageService, private formBuilder: FormBuilder) {}

  public onSubmit(): void {
    console.log(this.usersForm.value);
  }
}
