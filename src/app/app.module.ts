import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarCardComponent } from './car/car-card/car-card.component';
import { CarListComponent } from './car/car-list/car-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SportscarsService } from 'src/services/sportscars.service';

@NgModule({
  declarations: [
    AppComponent,
    CarCardComponent,
    CarListComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    SportscarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
