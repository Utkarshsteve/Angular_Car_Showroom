import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportscarsService } from 'src/services/sportscars.service';
import { ICar } from '../icar';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  
  SellRent = 1;
  Cars: ICar[];

  constructor(private route: ActivatedRoute , private service: SportscarsService) { }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2; //Means we are on rent-car URL else base url
    }
    this.service.getAllCars(this.SellRent).subscribe(
      data => {
        this.Cars = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

}
