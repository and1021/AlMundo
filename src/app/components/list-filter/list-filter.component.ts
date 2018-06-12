import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.css']
})
export class ListFilterComponent implements OnInit {
  @Output() public searchHotelsF = new EventEmitter<string>();
  filter:string = null;
  constructor() { }


  ngOnInit() {
  }

  public searchHotelsByFilter(checkValue:string, inputValue:string){
    this.filter = inputValue + '|' + checkValue;
    this.searchHotelsF.emit(this.filter);
  }

}
