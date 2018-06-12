import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../../services/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  //TODO Create an interface to normalize the object
  hotelsList: any = [];

  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
    this.hotelsService.getHotels('name:|stars:').subscribe(hotels =>{
      this.hotelsList = hotels;
    });
  }

}
