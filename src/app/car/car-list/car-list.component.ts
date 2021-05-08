import { Component, OnInit } from '@angular/core';
import { SportscarsService } from 'src/services/sportscars.service';
import { ICar } from '../icar';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  Cars: Array<ICar>;

  constructor(private service: SportscarsService) { }

  ngOnInit(): void {
    this.service.getAllCars().subscribe(
      data => {
        this.Cars = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

}
