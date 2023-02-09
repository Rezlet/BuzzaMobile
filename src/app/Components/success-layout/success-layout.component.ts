import { fadeInOut } from './../../Services/animation';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-success-layout',
  templateUrl: './success-layout.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class SuccessLayoutComponent implements OnInit {
  @Input() isBooking: any;
  @Input() title: any;
  @Input() show: any = false;
  @Output() emit = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  toggleShow() {
    this.emit.emit(!this.show);
  }
}
