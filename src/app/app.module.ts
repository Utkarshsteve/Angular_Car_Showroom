import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CarCardComponent } from './car/car-card/car-card.component';
import { CarListComponent } from './car/car-list/car-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SportscarsService } from 'src/services/sportscars.service';
import { AddCarComponent } from './car/add-car/add-car.component';
import { CarDetailComponent } from './car/car-detail/car-detail.component';

const appRoutes: Routes = [
  
  {path: '', component: CarListComponent},
  {path: 'rent-car', component: CarListComponent},
  {path: 'add-car', component: AddCarComponent},
  {path: 'car-detail/:id', component: CarDetailComponent},
  {path: '**', component: CarListComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    CarCardComponent,
    CarListComponent,
    NavBarComponent,
    AddCarComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    SportscarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
