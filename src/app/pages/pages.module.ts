import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SidebarModule } from '../components/sidebar/sidebar.module';
import { NavbarModule } from '../components/navbar/navbar.module';
import { LoginModule } from '../login/login.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', component: PagesComponent, children:[
    {path: 'dashboard', component: DashboardComponent},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  ]}
];

@NgModule({
  declarations: [DashboardComponent, PagesComponent],
  imports: [
    CommonModule,
    SidebarModule,
    NavbarModule,
    RouterModule,
    RouterModule.forChild(routes)
  ],
  exports: [DashboardComponent, PagesComponent]
})
export class PagesModule { }
