import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { VisitorComponent } from './visitor.component';
import { VisitorRoutingModule } from './visitor-routing.module';
import { LoginComponent } from './login/login.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  declarations: [
    HeaderComponent,
    VisitorComponent,
    LoginComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    SettingComponent
  ],
  imports: [
    CommonModule,
    VisitorRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
  ],
})
export class VisitorModule {}
