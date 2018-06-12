import { Component, OnInit, Input, Output } from '@angular/core';
import { HotelsService } from '../../services/hotels.service';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  filter:string = null;
  hotelsList:any = [];

  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
    this.hotelsService.getHotels('').subscribe(hotels =>{
      this.hotelsList = hotels;
    });
  }

  public searchHotelsByFilter(filter:string){
    this.hotelsService.getHotels(filter).subscribe(hotels =>{
      this.hotelsList = hotels;
    });
  }

}
