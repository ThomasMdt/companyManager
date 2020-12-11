import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppCompaniesComponent } from './app-companies/app-companies.component';
import { AppComponent } from './app.component';
import { AppGuard, EditGuard} from './app.guard';
import { AuthComponent } from './auth/auth.component';
import { CompanyAdditionComponent } from './company-addition/company-addition.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
const routes: Routes = [
  { path: '', component: AuthComponent},
  { path: 'list', component: AppCompaniesComponent, canActivate: [AppGuard] },
  { path: 'detail/:id', component: CompanyDetailComponent, canActivate: [EditGuard]},
  { path: 'detail/:id/subsidiaries/:id1', component: CompanyDetailComponent, canActivate: [EditGuard]},
  { path: 'create', component: CompanyAdditionComponent,  canActivate: [EditGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
