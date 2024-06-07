import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginserviceService } from './loginservice.service';
import { ChartComponent } from './chart/chart.component';
import { ListComponent } from './list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SideBar2Component } from './side-bar2/side-bar2.component';
import {
  CdkMenuItemRadio,
  CdkMenuItemCheckbox,
  CdkMenuGroup,
  CdkMenu,
  CdkMenuTrigger,
  CdkMenuItem,
  CdkMenuBar,
} from '@angular/cdk/menu';
import { SongServiceService } from './song-service.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HomepageComponent,
    ChartComponent,
    ListComponent,
    SidebarComponent,
    SideBar2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatTreeModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    CdkMenuItemRadio,
    CdkMenuItemCheckbox,
    CdkMenuGroup,
    CdkMenu,
    CdkMenuTrigger,
    CdkMenuItem,
    CdkMenuBar,
  ],
  providers: [LoginserviceService,SongServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
