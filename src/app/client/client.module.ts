import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { HeaderComponent } from './header/header.component';
import { ClientRoutingModule } from './client-routing.module';



@NgModule({
  declarations: [ClientComponent, HeaderComponent],
  imports: [
    ClientRoutingModule,
    CommonModule
  ]
})
export class ClientModule { }
