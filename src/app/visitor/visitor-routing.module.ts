import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EyesComponent } from '../produts/eyes/eyes.component';
import { LipsComponent } from '../produts/lips/lips.component';
import { LoginComponent } from './login/login.component';
import { VisitorComponent } from './visitor.component';

const routes: Routes = [
  {
    path: '',
    component: VisitorComponent,
    children: [
      {
        path: 'eyes',
        component: EyesComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'lips',
        component: LipsComponent
      },
      {
        path: 'home',
        redirectTo: ''
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
