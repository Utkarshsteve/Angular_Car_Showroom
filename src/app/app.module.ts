import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CarCardComponent } from './car/car-card/car-card.component';
import { CarListComponent } from './car/car-list/car-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SportscarsService } from 'src/services/sportscars.service';
import { AddCarComponent } from './car/add-car/add-car.component';
import { CarDetailComponent } from './car/car-detail/car-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserServiceService } from 'src/services/user-service.service';
import { AlertifyService } from 'src/services/alertify.service';

const appRoutes: Routes = [
  
  {path: '', component: CarListComponent},
  {path: 'rent-car', component: CarListComponent},
  {path: 'add-car', component: AddCarComponent},
  {path: 'car-detail/:id', component: CarDetailComponent},
  {path: 'user/login', component: UserLoginComponent},
  {path: 'user/register', component: UserRegisterComponent},
  {path: '**', component: CarListComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    CarCardComponent,
    CarListComponent,
    NavBarComponent,
    AddCarComponent,
    CarDetailComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    SportscarsService,
    UserServiceService,
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
