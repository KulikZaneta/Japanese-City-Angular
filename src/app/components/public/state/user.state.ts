import { tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { LogInAction, LogOutAction } from './user.actions';
import Cookie from 'js-cookie';

export class UserStateModel {
  jwtToken: string
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    jwtToken: null
  }
})

export class UserState {


  constructor(public httpClient: HttpClient) {
  }

  @Selector()
  static jwtToken(state: UserStateModel) {
    return state.jwtToken
  }

  @Action(LogInAction)
  logIn(ctx: StateContext<UserStateModel>, { username, password }: LogInAction) {
    return this.httpClient.post<any>('http://localhost:8080/login', { username, password }).pipe(
      tap(response => {
        ctx.patchState({jwtToken: response.token})
      Cookie.set("token", response.token)
      })
      )
  }

  @Action(LogOutAction)
  logOut(ctx: StateContext<UserStateModel>) {
    ctx.patchState({jwtToken: null})
    Cookie.remove("token")
  }
}
