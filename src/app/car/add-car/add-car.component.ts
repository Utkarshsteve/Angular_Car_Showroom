import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  @ViewChild('Form') addCarForm: NgForm;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBack()
  {
    this.router.navigate(['/']);
  }

  onSubmit() {
    console.log("Submit Works");
    console.log(this.addCarForm);
  }

}
