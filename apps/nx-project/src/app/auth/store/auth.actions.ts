import { ActionTypes } from '../Constants/action-types.enum';

export interface AuthStateModel {
  isLogged: boolean;
  firstname: string | null;
}

export class Login {
  static readonly type = ActionTypes.Login;
  constructor(public payload: { username: string; password: string }) {}
}

export class Logout {
  static readonly type = ActionTypes.Logout;
}
