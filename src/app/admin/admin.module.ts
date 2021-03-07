import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReportsComponent } from './reports/reports.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    ReportsComponent,
    HeaderComponent,
    AdminComponent
    ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
})
export class AdminModule { }
