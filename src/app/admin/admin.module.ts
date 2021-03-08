import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReportsComponent } from './reports/reports.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin.component';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { EyesComponent } from './eyes/eyes.component';
import { FaceComponent } from './face/face.component';
import { LipsComponent } from './lips/lips.component';


@NgModule({
  declarations: [
    ReportsComponent,
    HeaderComponent,
    AdminComponent,
    LogoutComponent,
    MenuComponent,
    FooterComponent,
    EyesComponent,
    FaceComponent,
    LipsComponent,
    ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
})
export class AdminModule { }
