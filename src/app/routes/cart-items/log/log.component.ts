import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';

import { IItemData } from './item';

@Component({
  selector: 'app-cart-items-log',
  templateUrl: './log.component.html'
})
export class CartItemsLogComponent implements OnInit {
  editCache: { [key: string]: { edit: boolean; data: IItemData } } = {};
  listOfData: IItemData[] = [];

  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }
  cancelEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  saveEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    Object.assign(this.listOfData[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }
  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  constructor(private http: _HttpClient, private modal: ModalHelper) {}

  ngOnInit(): void {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        id: `${i}`,
        name: `Nicholas ${i}`,
        age: 32,
        address: `Port Louis. ${i}`
      });
    }
    this.allCartItems();
  }

  add(): void {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }
  allCartItems(): void {
    fetch('https://fakestoreapi.com/carts')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.listOfData = data;
      })
      .catch(err => console.log(err, 'Api-error'));
  }
}
