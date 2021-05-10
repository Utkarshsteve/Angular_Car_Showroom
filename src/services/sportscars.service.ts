import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ICar } from 'src/app/car/icar';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SportscarsService {

  constructor(private httpClient: HttpClient) { }

  getAllCars(SellRent: number): Observable<ICar[]> {
    return this.httpClient.get('data/cars.json').pipe(
      map(data => {
        const carsArray: Array<ICar> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
            carsArray.push(data[id]);
          }
        }
        return carsArray;
      })
    );

  }
}