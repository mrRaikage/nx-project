import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NgxsModule.forFeature(),
  ],
  exports: [RouterModule]
})
export class HomeModule {
}
