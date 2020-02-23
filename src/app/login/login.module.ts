import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {path: '', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'forgot', component: ForgotPasswordComponent}
]

@NgModule({
  declarations: [SigninComponent, SignupComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes)
  ],
  exports: [SigninComponent, SignupComponent, ForgotPasswordComponent]
})
export class LoginModule { }
