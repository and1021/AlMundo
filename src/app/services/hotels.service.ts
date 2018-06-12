import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable()
export class HotelsService {

  constructor(private http:HttpClient) { }

  getHotels(filters: string): Observable<any[]> {
    return this.http.get<any[]>('/hotels/'+ filters);
  }
}
