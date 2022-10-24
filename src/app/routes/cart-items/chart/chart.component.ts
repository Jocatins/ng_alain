import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { STColumn, STComponent, STData, STChange, STColumnFilter, STColumnFilterMenu } from '@delon/abc/st';
import { G2BarClickItem, G2BarData } from '@delon/chart/bar';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { dateTimePickerUtil } from '@delon/util/date-time';
import { NzMessageService } from 'ng-zorro-antd/message';
import { of, delay } from 'rxjs';

@Component({
  selector: 'app-cart-items-chart',
  templateUrl: './chart.component.html'
})
export class CartItemsChartComponent implements OnInit {
  public cartsList: STData[] = [];

  @ViewChild('customFilter', { static: true }) readonly customFilter!: TemplateRef<{
    $implicit: STColumnFilter;
    col: STColumn;
    handle: STColumnFilterMenu;
  }>;
  columns: STColumn[] = [];
  constructor(private msg: NzMessageService) {}

  ngOnInit(): void {
    this.columns = [
      { title: 'User-Id', index: 'userId', sort: { compare: (a, b) => a.name.length - b.name.length } },
      {
        title: 'Date',
        index: 'date',
        type: 'date'
      }
    ];
    this.allCartsList();
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
    fetch('https://fakestoreapi.com/carts')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.cartsList = data;
      });
  }
}
