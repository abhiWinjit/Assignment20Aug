import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
// import { RegisterComponent } from './register/register.component';
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
import { UserdataService } from "./userdata.service";
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { SubhomeListComponent } from './home/subhome-list/subhome-list.component';
import { SubhomeDetailsComponent } from './home/subhome-details/subhome-details.component';
import { SubhomeItemComponent } from './home/subhome-list/subhome-item/subhome-item.component';
import { NavigationComponent } from './navigation/navigation.component';

// imports:[
//   RouterModule.forRoot([])
// ]

const appRoutes: Routes =[{
  path:'register',
  component: RegisterComponent
},
{
  path:'home',
  component: HomeComponent
}, 
{
  path:'login',
  component: LoginComponent
},
{
  path:'forgotPassword',
  component: ForgotPasswordComponent
}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ForgotPasswordComponent,
    SubhomeListComponent,
    SubhomeDetailsComponent,
    SubhomeItemComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [ UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

