import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent, STData, STChange } from '@delon/abc/st';
import { XlsxService } from '@delon/abc/xlsx';
import { ModalHelper, Path, POST, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

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
  // params: { name?: string } = { name: 'asdf' };

  // columns: STColumn[] = [
  //   { title: 'Id', index: 'id' },
  //   { title: 'First Name', index: 'name.firstname' },
  //   { title: 'Last Name', index: 'name.lastname' },
  //   { title: 'Username', index: 'username' },
  //   { title: 'Email', index: 'email' },
  //   { title: 'City', index: 'address.city' },
  //   {
  //     title: '',
  //     buttons: [
  //       {
  //         text: 'Edit',
  //         type: 'static',
  //         click: (item: IUserList) => {
  //           console.log('clicked', item);
  //         }
  //       },
  //       {
  //         text: 'Delete',
  //         type: 'static',
  //         click: (item: IUserList) => {
  //           console.log('clicked', item?.id);
  //           fetch(`https://fakestoreapi.com/users/${item.id}`, {
  //             method: 'DELETE'
  //           })
  //             .then(res => res.json())
  //             .then(json => console.log(json));
  //         }
  //       }
  //     ]
  //   }
  // ];

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
  public userId: number = 0;

  constructor(private http: _HttpClient, private modal: ModalHelper, private msg: NzMessageService, private xlsx: XlsxService) {}

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

  ngOnInit(): void {
    this.allUsersList();
  }
  allUsersList(): void {
    // this.http.get<IUserList[]>(`https://fakestoreapi.com/users`).subscribe(data => {
    //   console.log(data);
    //   this.usersList = data;
    // });
    fetch('https://fakestoreapi.com/users')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.usersList = data;
      });
  }
  singleUser(): void {
    fetch('https://fakestoreapi.com/users/1')
      .then(res => res.json())
      .then(data => console.log(data));
  }

  add(): void {
    console.log('ng-onInit');
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }
  // @POST(':id')
  // save(@Path('id') id: number, @Body data: Object): Observable {
  //   return;
  // }

  // @POST()
  // save(@Payload data: {}): Observable {
  //   return;
  // }
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
