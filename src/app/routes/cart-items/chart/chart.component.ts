import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { STColumn, STComponent, STData, STChange, STColumnFilter } from '@delon/abc/st';
import { G2BarClickItem, G2BarData } from '@delon/chart/bar';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { of, delay } from 'rxjs';

@Component({
  selector: 'app-cart-items-chart',
  templateUrl: './chart.component.html'
})
export class CartItemsChartComponent implements OnInit {
  @ViewChild('st') private st!: STComponent;
  public cartsList: STData[] = Array(10)
    .fill({})
    .map((_, idx) => {
      return {
        userId: Math.ceil(Math.random() * 10) + 20,
        products: `city ${idx + 1}`,
        phone: `phone ${idx + 1}`,
        enabled: idx % 2 === 0
      };
    });
  constructor(private msg: NzMessageService) {}

  columns: STColumn[] = [
    { title: 'Id', index: 'id' },
    { title: 'First Name', index: 'name.firstname', render: 'name.firstname' },
    { title: 'Last Name', index: 'name.lastname', render: 'lastname' }
  ];

  ngOnInit(): void {
    console.log('object');
  }

  add(): void {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }

  handleClick(data: G2BarClickItem): void {
    this.msg.info(`${data.item.x} - ${data.item.y}`);
  }
  allCartsList(): void {
    // this.http.get<IUserList[]>(`https://fakestoreapi.com/users`).subscribe(data => {
    //   console.log(data);
    //   this.usersList = data;
    // });
    fetch('https://fakestoreapi.com/carts')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.cartsList = data;
      });
  }
}
