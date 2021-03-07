import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { VisitorComponent } from './visitor.component';
import { VisitorRoutingModule } from './visitor-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    VisitorComponent
  ],
  imports: [
    CommonModule,
    VisitorRoutingModule
  ]
})
export class VisitorModule { }
