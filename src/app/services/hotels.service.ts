import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable()
export class HotelsService {

  constructor(private http:HttpClient) { }

  getHotels(): Observable<Hotels[]> {
    return this.http.get<Hotels[]>('/hotels/');
  }

  getHotelsByName(hotel: string): Observable<Hotels[]> {
    return this.http.get<Hotels[]>('/hotels/'+ hotel);
  }

  getHotelsByStars(star: string): Observable<Hotels[]>{
    return this.http.get<Hotels[]>('/hotels/filters/'+ star);
  }
}

export interface Hotels {
    id: string;
    name: string;
    stars: number;
    price: number;
    image: string;
    amenities: any[];
}
