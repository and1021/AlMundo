import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-name',
  templateUrl: './filter-name.component.html',
  styleUrls: ['./filter-name.component.css']
})
export class FilterNameComponent implements OnInit {
  @Output() public searchHotelsA = new EventEmitter<string>();
  inputValue: string = null;
  constructor() { }

  ngOnInit() {
  }

  public searchHotels(filterName: string) {
    let result = 'name:' + filterName;
    if (filterName == '') {
      result = '';
    }
    this.searchHotelsA.emit(result);
  }
}
