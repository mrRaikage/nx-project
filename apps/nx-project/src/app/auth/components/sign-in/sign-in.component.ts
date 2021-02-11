import { Component } from '@angular/core';
import { Store } from '@ngxs/store';

import { Login } from '../../store/auth.actions';
import { IUserLoginData } from '../../interfaces/user-data.interface';

@Component({
  selector: 'nx-project-authorization-form',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  constructor(
    private store: Store,
  ) { }

  onSubmit(formData: IUserLoginData) {
    this.store.dispatch(new Login(formData));
  }
}
