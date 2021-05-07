import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  Cars: Array<any> = [{
    "Id": 1,
    "Name": "Lamborghini Urus",
    "Type": "SUV",
    "Price": 1200
  },
  {
    "Id": 2,
    "Name": "Audi",
    "Type": "???",
    "Price": 0
  },


  {
    "Id": 3,
    "Name": "Tesla",
    "Type": "???",
    "Price": 0
  },

  {
    "Id": 4,
    "Name": "BMW",
    "Type": "???",
    "Price": 0
  },

  {
    "Id": 5,
    "Name": "Ford",
    "Type": "???",
    "Price": 0
  },

  {
    "Id": 6,
    "Name": "Ferrari",
    "Type": "???",
    "Price": 0
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
