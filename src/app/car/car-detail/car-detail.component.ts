import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  public carId: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.carId = +this.route.snapshot.params['id']; //this returns a string so convert it into number
    // '+' sign convert string to number

    this.route.params.subscribe(
      (params) => {
        this.carId = +params['id'];
      }
    )
  }

  onNext() {
    this.carId += 1;
    this.router.navigate(['car-detail', this.carId])
  }

}
