import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ACLService } from '@delon/acl';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { ALAIN_I18N_TOKEN, MenuService, SettingsService, TitleService } from '@delon/theme';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzIconService } from 'ng-zorro-antd/icon';
import { Observable, zip, of, catchError, map } from 'rxjs';

import { ICONS } from '../../../style-icons';
import { ICONS_AUTO } from '../../../style-icons-auto';

/**
 * Used for application startup
 * Generally used to get the basic data of the application, like: Menu Data, User Data, etc.
 */
@Injectable()
export class StartupService {
  constructor(
    iconSrv: NzIconService,
    private menuService: MenuService,
    private settingService: SettingsService,
    private aclService: ACLService,
    private titleService: TitleService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private httpClient: HttpClient,
    private router: Router
  ) {
    iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
  }

  private viaHttp(): Observable<void> {
    return this.httpClient.get('assets/tmp/app-data.json').pipe(
      catchError((res: NzSafeAny) => {
        console.warn(`StartupService.load: Network request failed`, res);
        setTimeout(() => this.router.navigateByUrl(`/exception/500`));
        return of({});
      }),
      map((res: NzSafeAny) => {
        // Application information: including site name, description, year
        this.settingService.setApp(res.app);
        // User information: including name, avatar, email address
        this.settingService.setUser(res.user);
        // ACL: Set the permissions to full, https://ng-alain.com/acl/getting-started
        this.aclService.setFull(true);
        // Menu data, https://ng-alain.com/theme/menu
        this.menuService.add(res.menu);
        // Can be set page suffix title, https://ng-alain.com/theme/title
        this.titleService.suffix = res.app.name;
      })
    );
  }

  private viaMock(): Observable<void> {
    // const tokenData = this.tokenService.get();
    // if (!tokenData.token) {
    //   this.router.navigateByUrl(this.tokenService.login_url!);
    //   return;
    // }
    // mock
    const app: any = {
      name: `ng-Sphinx`,
      description: `Sphinx Application`
    };
    const user: any = {
      name: 'Jocatins',
      avatar: './assets/tmp/img/avatar.jpg',
      email: 'joca@gmail.com',
      token: '123456789'
    };
    // Application information: including site name, description, year
    this.settingService.setApp(app);
    // User information: including name, avatar, email address
    this.settingService.setUser(user);
    // ACL: Set the permissions to full, https://ng-alain.com/acl/getting-started
    this.aclService.setFull(true);
    // Menu data, https://ng-alain.com/theme/menu
    this.menuService.add([
      {
        text: 'Main',
        group: true,
        children: [
          {
            text: 'Dashboard',
            link: '/dashboard',
            icon: { type: 'icon', value: 'appstore' }
          }
        ]
      },
      {
        text: 'Categories menu',
        group: true,
        children: [
          {
            text: 'Categories',
            link: 'categories/categories-view',
            icon: { type: 'icon', value: 'appstore' },
            children: [
              {
                text: 'All Categories',
                icon: { type: 'icon', value: 'cloud' },
                link: 'categories/categories-view'
              },
              {
                text: 'Products Categories',
                icon: { type: 'icon', value: 'cloud' },
                link: 'products/productList'
              }
            ]
          }
        ]
      },
      {
        text: 'Products Menu',
        group: true,
        children: [
          {
            text: 'Products',
            link: '/dashboard',
            icon: { type: 'icon', value: 'appstore' },
            children: [
              {
                text: 'All Products',
                icon: { type: 'icon', value: 'cloud' },
                link: 'products/productList'
              },
              {
                text: 'Product Items',
                icon: { type: 'icon', value: 'cloud' },
                link: 'products/productList'
              }
            ]
          }
        ]
      },
      {
        text: 'Users Menu',
        group: true,
        children: [
          {
            text: 'Users',
            link: '/dashboard',
            icon: { type: 'icon', value: 'profile' },
            children: [
              {
                text: 'Users-List',
                icon: { type: 'icon', value: 'profile' },
                link: 'users/users-list'
              },
              {
                text: 'Add-User',
                icon: { type: 'icon', value: 'profile' },
                link: 'add-user/log'
              }
            ]
          }
        ]
      },
      {
        text: 'Cart Section',
        group: true,
        children: [
          {
            text: 'Cart',
            link: '/dashboard',
            icon: { type: 'icon', value: 'appstore' },
            children: [
              {
                text: 'All Carts',
                icon: { type: 'icon', value: 'profile' },
                link: 'cart-items/log'
              },
              {
                text: 'Charts',
                icon: { type: 'icon', value: 'profile' },
                link: 'cart-items/chart'
              }
            ]
          }
        ]
      }
    ]);
    // Can be set page suffix title, https://ng-alain.com/theme/title
    this.titleService.suffix = app.name;

    return of();
  }

  load(): Observable<void> {
    // http
    // return this.viaHttp();
    // mock: Don’t use it in a production environment. ViaMock is just to simulate some data to make the scaffolding work normally
    // mock：请勿在生产环境中这么使用，viaMock 单纯只是为了模拟一些数据使脚手架一开始能正常运行
    return this.viaMock();
  }
}
