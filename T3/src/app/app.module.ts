import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppCompaniesComponent } from './app-companies/app-companies.component';
import { MobxAngularModule } from 'mobx-angular';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyAdditionComponent } from './company-addition/company-addition.component';
import { AuthComponent } from './auth/auth.component';
import { AppGuard, EditGuard } from './app.guard';
@NgModule({
  declarations: [
    AppComponent,
    AppCompaniesComponent,
    CompanyDetailComponent,
    CompanyAdditionComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MobxAngularModule,
    FormsModule
  ],
  providers: [
    AppGuard,
    EditGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
