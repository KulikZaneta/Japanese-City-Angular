import { UserState } from './../public/state/user.state';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Select, Store } from '@ngxs/store';
import { LogOutAction, LoginWithCookieAction } from '../public/state/user.actions';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public translate: TranslateService, public store: Store) { }

  @Select(state => state.user.jwtToken)
  jwtToken$: Observable<String>

  ngOnInit(): void {
    this.translate.setDefaultLang('en')
    this.store.dispatch(new LoginWithCookieAction())
  }
  
  public changeLanguage(language: string) {
    this.translate.use(language)
  }

  public logOut() {
    this.store.dispatch(new LogOutAction())
  }
}
