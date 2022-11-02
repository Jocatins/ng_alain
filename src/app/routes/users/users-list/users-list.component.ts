import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent, STData, STChange } from '@delon/abc/st';
import { XlsxService } from '@delon/abc/xlsx';
import { NzMessageService } from 'ng-zorro-antd/message';

import { UsersService } from '../users.service';
import { IUserList } from './users';

@Component({
  selector: 'app-users-users-list',
  templateUrl: './users-list.component.html'
})
export class UsersUsersListComponent implements OnInit {
  @ViewChild('st') private st!: STComponent;
  public usersList: STData[] = Array(10)
    .fill({})
    .map((_, idx) => {
      return {
        id: idx + 1,
        firstName: `firstName ${idx + 1}`,
        lastName: `lastName ${idx + 1}`,
        username: `username ${idx + 1}`,
        email: `email ${idx + 1}`,
        city: `city ${idx + 1}`,
        phone: `phone ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20,
        enabled: idx % 2 === 0
      };
    });
  params = { a: 1, b: 2, c: 3, d: 4 };

  public userId: number = 0;

  constructor(private usersService: UsersService, private msg: NzMessageService, private xlsx: XlsxService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  columns: STColumn[] = [
    { title: 'Id', index: 'id' },
    { title: 'First Name', index: 'name.firstname', render: 'name.firstname' },
    { title: 'Last Name', index: 'name.lastname', render: 'lastname' },
    {
      title: 'Username',
      index: 'username',
      render: 'username',
      sort: {
        compare: (a, b) => a.username - b.username
      }
    },
    { title: 'Email', index: 'email', render: 'email' },
    { title: 'Phone', index: 'phone', render: 'phone' },
    { title: 'City', index: 'address.city', render: 'city' },
    {
      title: 'Actions',
      buttons: [
        {
          icon: 'edit',
          text: 'Edit',
          iif: i => !i.edit,
          click: i => this.updateEdit(i, true)
        },
        {
          text: `Save`,
          iif: i => i.edit,
          click: i => {
            this.submit(i);
          }
        },
        {
          text: `Cancel`,
          iif: i => i.edit,
          click: i => this.updateEdit(i, false)
        },
        {
          icon: 'delete',
          type: 'static',
          pop: {
            title: 'Are you sure?',
            okType: 'danger',
            icon: 'star'
          },
          click: (item: IUserList) => {
            console.log('clicked id', item?.id);
            fetch(`https://fakestoreapi.com/users/${item.id}`, {
              method: 'DELETE'
            })
              .then(res => res.json())
              .then(json => console.log(json));
          }
        }
      ]
    },
    {
      title: 'Sort',
      format: (item, _col, index) => `${index + 1}: ${item.name.last} ${item.name.first}`,
      sort: true,
      children: [
        { title: 'username', index: 'username', sort: true },
        { title: 'email', index: 'email', sort: true }
      ]
    }
  ];

  // public usersList: IUserList[] = [];

  private submit(i: STData): void {
    this.msg.success(JSON.stringify(this.st.pureItem(i)));
    this.updateEdit(i, false);
  }

  private updateEdit(i: STData, edit: boolean): void {
    this.st.setRow(i, { edit }, { refreshSchema: true });
  }
  change(e: STChange): void {
    console.log(e);
  }
  getAllUsers(): void {
    this.usersService.getData().subscribe(data => {
      console.log('data', data);
      this.usersList = data;
    });
  }

  singleUser(): void {
    fetch('https://fakestoreapi.com/users/1')
      .then(res => res.json())
      .then(data => console.log(data));
  }
  singleData(id: number): void {
    this.usersService.getSingleData(id).subscribe(response => {
      console.log(response, id);
    });
  }

  add(): void {
    console.log('ng-onInit');
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }

  downloadFile(format: 'xlsx' | 'csv'): void {
    const data = [this.columns.map(i => i.title)];
    this.usersList.forEach(i => data.push(this.columns.map(c => i[c.index as string])));
    this.xlsx.export({
      sheets: [
        {
          data,
          name: 'sheet'
        }
      ],
      format
    });
  }
}
