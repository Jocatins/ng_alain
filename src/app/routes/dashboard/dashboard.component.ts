import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoadingService, LoadingType } from '@delon/abc/loading';
import { _HttpClient } from '@delon/theme';
import { NzEllipsisPipe } from 'ng-zorro-antd/pipes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  constructor(private http: _HttpClient, private loadingSrv: LoadingService) {}

  article =
    'There were injuries alleged in three cases in 2015, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.';

  ngOnInit(): void {
    this.show('spin');
    console.log('class');
  }
  show(type: LoadingType): void {
    this.loadingSrv.open({ type });
    setTimeout(() => this.loadingSrv.close(), 1000 * 3);
  }
}
