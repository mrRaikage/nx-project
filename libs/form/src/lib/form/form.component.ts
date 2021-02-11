import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUserLoginData } from '../interfaces/user-login.interface';

@Component({
  selector: 'nx-project-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Output() formDataEvent = new EventEmitter<IUserLoginData>();

  profileForm = new FormGroup({
    username: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.minLength(8), Validators.required]),
  });

  get username(): AbstractControl {
    return this.profileForm.controls.username;
  }

  get password(): AbstractControl {
    return this.profileForm.controls.password;
  }

  constructor() { }

  onSubmit() {
    if (this.profileForm.invalid) {
      return;
    }
    this.formDataEvent.emit(this.profileForm.value)
  }

}
