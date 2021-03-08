import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { AdminComponent } from './admin.component';
import { LogoutComponent } from './logout/logout.component';
import { LipsComponent } from './lips/lips.component';
import { EyesComponent } from './eyes/eyes.component';
import { FaceComponent } from './face/face.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'reports',
        component: ReportsComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      },
      {
        path: 'face',
        component: FaceComponent
      },
      {
        path: 'eyes',
        component: EyesComponent
      },
      {
        path: 'lips',
        component: LipsComponent
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
