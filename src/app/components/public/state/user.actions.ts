import { UserDto } from './../../../../api/models/user-dto';
export class LogInAction {
  static readonly type = '[User] LogInAction';
  constructor(public username: string, public password: string) { }
}

export class LogOutAction {
  static readonly type = '[User] LogOutAction';
  constructor() { }
}

export class RegisterUserAction {
  static readonly type = '[User] RegisterUserAction';
  constructor(public userDto: UserDto) { }
}

export class LoginWithCookieAction {
  static readonly type = '[User] LoginWithCookieAction';
  constructor() { }
}

export class CurrentUserAction {
  static readonly type = '[User] CurrentUserAction';
  constructor() { }
}

export class PageAction {
  static readonly type = '[User] PageAction';
  constructor(public page: number, public size: number) { }
}
