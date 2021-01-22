import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Auth1Guard } from './auth1.guard'
import { HomeComponent } from './home/home.component';
import { SpinWheelComponent } from './spin-wheel/spin-wheel.component';
import { SpinComponent } from './spin/spin.component';


const routes: Routes = [
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "welcome", component: WelcomeComponent },
  { path: "home", component: HomeComponent, canActivate: [Auth1Guard] },
  { path: "spinwheel", component: SpinWheelComponent },
  { path: "spin", component: SpinComponent },

  //, canActivate: [Auth1Guard]

  { path: "", component: WelcomeComponent },
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
