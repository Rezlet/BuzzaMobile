import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch-item',
  templateUrl: './branch-item.component.html',
  styleUrls: [],
})
export class BranchItemComponent implements OnInit {
  @Input() item: any;
  @Input() brandName: any = '';
  showBooking: any = false;
  constructor() {}

  ngOnInit(): void {}

  getShowBooking(value: any) {
    this.showBooking = value;
  }

  toggleShowBooking() {
    this.showBooking = !this.showBooking;
  }
}
