import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { LogInAction } from './user.actions';

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


  constructor(public httpClient: HttpClient){
  }

  @Selector()
  static jwtToken(state: UserStateModel) {
    return state.jwtToken
  }

  @Action(LogInAction)
  logIn(ctx: StateContext<UserStateModel>, {username, password}: LogInAction) {
    const formData = new FormData();
    formData.append('username', username)
    formData.append('password', password)

    console.log('state')
    return this.httpClient.post<any>('http://localhost:8080/login', formData, {observe: 'response'}).pipe(
      tap(response => console.log(response.headers.get('Authorization')))
    )
  }
}
