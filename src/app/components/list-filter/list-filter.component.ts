import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.css']
})
export class ListFilterComponent implements OnInit {
  @Output() public searchHotelsF = new EventEmitter<string>();
  filter:string = null;
  filterStar:string = null;
  filterName:string = null;
  constructor() { }


  ngOnInit() {
  }

  public getFilterStar(checkValue:string){
    this.filterStar = checkValue;
    if(!!this.filterStar){
      if(!!this.filterName){
        this.filter = this.filterName + '|' + this.filterStar;
      }else{
        this.filter = this.filterStar;
      }
    }else{
      this.filterStar = null;
    }
    this.searchHotelsF.emit(this.filter);
  }
  public getFilterName(inputValue:string){

    this.filterName = inputValue;
    if(!!this.filterName){
      if(!!this.filterStar){
        this.filter = this.filterStar + '|' + this.filterName;
      }else{
        this.filter = this.filterName;
      }
    }else{
      this.filterName = null;
    }
    this.searchHotelsF.emit(this.filter);
  }

}
