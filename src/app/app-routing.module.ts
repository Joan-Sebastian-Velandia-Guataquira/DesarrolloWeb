import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EyesComponent } from './produts/eyes/eyes.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./visitor/visitor.module').then((m) => m.VisitorModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'client',
    loadChildren: () =>
      import('./client/client.module').then((m) => m.ClientModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
