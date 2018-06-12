import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-star',
  templateUrl: './filter-star.component.html',
  styleUrls: ['./filter-star.component.css']
})
export class FilterStarComponent implements OnInit {
  @Output() public searchHotelsB = new EventEmitter<string>();
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
    let stars = '';
    this.starArray.forEach(element => {
      if(element.checked){
        if(stars == ''){
          stars = stars + element.toString();          
        }else{
          stars = stars + '-' + element.toString();
        }
      }
    });
    if(stars!=''){
      stars = 'stars:' + stars;
    }
    this.searchHotelsB.emit(stars);
  }
}
