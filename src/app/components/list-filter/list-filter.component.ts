import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.css']
})
export class ListFilterComponent implements OnInit {
  @Output() public searchHotelsF = new EventEmitter<string>();
  filter: string = null;
  filterStar: string = null;
  filterName: string = null;
  constructor() { }


  ngOnInit() {
  }

  public getFilterStar(checkValue: string) {
    this.filter = '';
    this.filterStar = checkValue;
    if (!!this.filterName && !!this.filterStar) {
      this.filter = this.filterName + '|' + this.filterStar;
    } else if (!!this.filterName) {
      this.filter = this.filterName;
    } else if (!!this.filterStar) {
      this.filter = this.filterStar;
    }
    this.searchHotelsF.emit(this.filter);
  }
  public getFilterName(inputValue: string) {
    this.filter = '';
    this.filterName = inputValue;
    if (!!this.filterName && !!this.filterStar) {
      this.filter = this.filterName + '|' + this.filterStar;
    } else if (!!this.filterName) {
      this.filter = this.filterName;
    } else if (!!this.filterStar) {
      this.filter = this.filterStar;
    }
    this.searchHotelsF.emit(this.filter);
  }

}
