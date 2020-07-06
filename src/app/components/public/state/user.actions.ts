export class LogInAction {
  static readonly type = '[User] LogInAction';

  constructor(public username: string, public password: string) { }
}
