import { PageUserDto } from './../../../../api/models/page-user-dto';
import { state } from '@angular/animations';
import { UserDto } from './../../../../api/models/user-dto';
import { tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { LogInAction, LogOutAction, RegisterUserAction, LoginWithCookieAction, CurrentUserAction, PageAction } from './user.actions';
import Cookie from 'js-cookie';
import { UserControllerService } from 'src/api/services';
import { Navigate } from '@ngxs/router-plugin';

export class UserStateModel {
  jwtToken: string
  currentUser: UserDto
  userPage: PageUserDto
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    jwtToken: null,
    currentUser: null,
    userPage: null
  }
})

export class UserState {

  constructor(public httpClient: HttpClient, public userService: UserControllerService) {
  }

  @Selector()
  static jwtToken(state: UserStateModel) {
    return state.jwtToken
  }

  @Selector()
  static currentUser(state: UserStateModel) {
    return state.currentUser
  }

  @Action(LogInAction)
  logIn(ctx: StateContext<UserStateModel>, { username, password }: LogInAction) {
    return this.httpClient.post<any>('http://localhost:8080/login', { username, password }).pipe(
      tap(response => {
        ctx.patchState({ jwtToken: response.token })
        Cookie.set("token", response.token)
        ctx.dispatch(new Navigate(['/city-list']))
        ctx.dispatch(new CurrentUserAction())
      })
    )
  }

  @Action(LogOutAction)
  logOut(ctx: StateContext<UserStateModel>) {
    ctx.patchState({ jwtToken: null, currentUser: null })
    Cookie.remove("token")
  }

  @Action(RegisterUserAction)
  register(ctx: StateContext<UserStateModel>, { userDto }: RegisterUserAction) {
    return this.userService.registerUsingPOST(userDto).pipe(
      tap(response => {
        ctx.dispatch(new Navigate(['/city-list']))
      })
    )
  }

  @Action(LoginWithCookieAction)
  loginWithCookie(ctx: StateContext<UserStateModel>) {
    const token = Cookie.get("token")
    if(token) {
      ctx.patchState({jwtToken: token})
      ctx.dispatch(new CurrentUserAction())
    }

  }

  @Action(CurrentUserAction)
  currentUser(ctx: StateContext<UserStateModel>) {
    return this.userService.infoUserUsingGET().pipe(tap( response => ctx.patchState({currentUser: response})))
  }

  @Action(PageAction)
  pageUser(ctx: StateContext<UserStateModel>, { page, size }: PageAction) {
    return this.userService.pageUsingGET({ page, size }).pipe(tap(response => ctx.patchState({ userPage: response })))
  }
}
