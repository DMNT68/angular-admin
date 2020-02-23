import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SidebarModule } from '../components/sidebar/sidebar.module';
import { NavbarModule } from '../components/navbar/navbar.module';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path: '', component: PagesComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'users', component: UsersComponent},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  ]}
];

@NgModule({
  declarations: [DashboardComponent, PagesComponent, UsersComponent],
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
