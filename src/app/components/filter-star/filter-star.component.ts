import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-star',
  templateUrl: './filter-star.component.html',
  styleUrls: ['./filter-star.component.css']
})
export class FilterStarComponent implements OnInit {
  @Output() public searchHotelsB = new EventEmitter<string>();
  checkValue:string = null;
  starArray:any = [
    {value:5, checked:true, stars:[{value:1},{value:2},{value:3},{value:4},{value:5}]},
    {value:4, checked:true, stars:[{value:1},{value:2},{value:3},{value:4}]},
    {value:3, checked:true, stars:[{value:1},{value:2},{value:3}]},
    {value:2, checked:true, stars:[{value:1},{value:2}]},
    {value:1, checked:true, stars:[{value:1}]},
  ];

  constructor() { }

  ngOnInit() {
  }

  checkAll(ev) {
    this.starArray.forEach(x => {return (x.checked = ev.target.checked)})
    this.searchHotelsByStar();
  }
;
  
  isAllChecked() {
    return this.starArray.every(a => a.checked);
  }

  public searchHotelsByStar(){
    this.checkValue = '';
    this.starArray.forEach(element => {
      if(element.checked){
        if(this.checkValue == ''){
          this.checkValue = this.checkValue + element.toString();          
        }else{
          this.checkValue = this.checkValue + '-' + element.toString();
        }
      }
    });
    if(this.checkValue!=''){
      this.checkValue = 'stars:' + this.checkValue;
    }
    this.searchHotelsB.emit(this.checkValue);
  }
}
