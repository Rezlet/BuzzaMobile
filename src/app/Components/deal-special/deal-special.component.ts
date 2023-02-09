import { GlobalFunctionService } from './../../Shared/global-function/global-function.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deal-special',
  templateUrl: './deal-special.component.html',
  styleUrls: [],
})
export class DealSpecialComponent implements OnInit {
  @Input() item: any;
  @Input() brandName: any = 'Buzza Pizza';
  lastUpdate: any;
  constructor(private functionGlobal: GlobalFunctionService) {}

  ngOnInit(): void {
    console.log(this.item);

    this.lastUpdate = this.functionGlobal.convertTimeToUI(this.item.LastUpdate);
  }
}
