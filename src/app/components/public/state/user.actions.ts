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

