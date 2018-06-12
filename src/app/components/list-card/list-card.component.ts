import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {
  @Input() List:any = [];

  constructor() { }

  ngOnInit() {
  }

}
