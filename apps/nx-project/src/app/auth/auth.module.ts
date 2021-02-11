import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormModule } from '@nx-project/form';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthComponent } from './auth.component';
import { HomeComponent } from '../home/home.component';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: SignInComponent,
        canActivate: [ AuthGuard ]
      },
    ]
  }
]

@NgModule({
  declarations: [
    SignInComponent,
    AuthComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgxsModule.forFeature(),
    RouterModule.forRoot(routes),
    FormModule,
    MatButtonModule
  ],
  exports: [RouterModule],
  providers: [ AuthGuard ],
})
export class AuthModule { }
