import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { AdminComponent } from './admin.component';
import { LogoutComponent } from './logout/logout.component';
import { LipsComponent } from './lips/lips.component';
import { EyesComponent } from './eyes/eyes.component';
import { FaceComponent } from './face/face.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'face',
        component: FaceComponent
      },
      {
        path: 'lips',
        component: LipsComponent
      },
      {
        path: 'eyes',
        component: EyesComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
