import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {

  Car: any = {
    "Id":1,
    "Name":"Lamborghini Urus",
    "Type":"SUV",
    "Price":1200
  }

  constructor() { }

  ngOnInit(): void {
  }

}
