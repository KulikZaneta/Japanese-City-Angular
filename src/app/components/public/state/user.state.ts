import { PageUserDto } from './../../../../api/models/page-user-dto';
import { UserDto } from './../../../../api/models/user-dto';
import { tap, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { LogInAction, LogOutAction, RegisterUserAction, LoginWithCookieAction, CurrentUserAction, UserPageAction } from './user.actions';
import Cookie from 'js-cookie';
import { UserControllerService } from 'src/api/services';
import { Navigate } from '@ngxs/router-plugin';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material';

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

  constructor(public httpClient: HttpClient, public userService: UserControllerService, public matSnackBar: MatSnackBar) {
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
        this.matSnackBar.open('Successfully logged', 'X', {
          duration: 3000, horizontalPosition: "center"
        })
      }),
      catchError(({ err, caught }) => {
        this.matSnackBar.open('Incorrect username or password', 'X', {
          duration: 3000, horizontalPosition: "center"
        })
        return of()
      })
    )
  }

  @Action(LogOutAction)
  logOut(ctx: StateContext<UserStateModel>) {
    ctx.patchState({ jwtToken: null, currentUser: null })
    Cookie.remove("token")
    ctx.dispatch(new Navigate(['/city-list']))
  }

  @Action(RegisterUserAction)
  register(ctx: StateContext<UserStateModel>, { userDto }: RegisterUserAction) {
    return this.userService.registerUsingPOST(userDto).pipe(
      tap(response => {
        this.matSnackBar.open('Account was created successfully. Please log in', 'X', {
          duration: 10000, horizontalPosition: "center", verticalPosition: "bottom"
        })
        ctx.dispatch(new Navigate(['/user']))
      })
    )
  }

  @Action(LoginWithCookieAction)
  loginWithCookie(ctx: StateContext<UserStateModel>) {
    const token = Cookie.get("token")
    if (token) {
      ctx.patchState({ jwtToken: token })
      ctx.dispatch(new CurrentUserAction())
    }

  }

  @Action(CurrentUserAction)
  currentUser(ctx: StateContext<UserStateModel>) {
    return this.userService.infoUserUsingGET().pipe(tap(response => ctx.patchState({ currentUser: response })))
  }

  @Action(UserPageAction)
  pageUser(ctx: StateContext<UserStateModel>, { page, size }: UserPageAction) {
    return this.userService.getUserPageUsingGET({ page, size }).pipe(tap(response => ctx.patchState({ userPage: response })))
  }
}
