import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable, NgZone } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AuthStateModel, Login, Logout } from './auth.actions';
import { AuthService } from '../service/auth.service';

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    isLogged: false,
    firstname: null,
  }
})
@Injectable()
export class AuthState {
  @Selector()
  static firstname(state: AuthStateModel): string | null {
    return state.firstname;
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  @Action(Login)
  login(ctx: StateContext<AuthStateModel>, action: Login) {
    return this.authService.login(action.payload).pipe(
      tap((result) => {
        this.ngZone.run(() => {
          ctx.patchState({
            isLogged: result.success,
            firstname: result.name
          });
          this.authService.setToken(result.token);
          this.router.navigate(['/home']);
        });
      })
    );
  }

  @Action(Logout)
  logout(ctx: StateContext<AuthStateModel>) {
    const token = this.authService.getToken();
    return this.authService.logout(token).pipe(
      tap((result: { success: boolean }) => {
        this.ngZone.run(() => {
          ctx.setState({
            isLogged: result.success,
            firstname: null
          });
          this.router.navigate(['/login']);
        });
      })
    );
  }
}
