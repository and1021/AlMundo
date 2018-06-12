import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {
  @Input() item:any = {};
  starArray:any = [1,2,3,4,5];

  constructor() { }

  ngOnInit() {  
  }

}
