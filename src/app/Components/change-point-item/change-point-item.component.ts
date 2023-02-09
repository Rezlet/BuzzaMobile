import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-point-item',
  templateUrl: './change-point-item.component.html',
  styleUrls: []
})
export class ChangePointItemComponent implements OnInit {
@Input() item: any;
  constructor() { }

  ngOnInit(): void {
  }

}
