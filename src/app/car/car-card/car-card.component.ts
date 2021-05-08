import { Component, Input, OnInit } from '@angular/core';
import { ICar } from '../icar';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {

  @Input() car: ICar;

    

  constructor() { }

  ngOnInit(): void {
  }

}
