import { GlobalFunctionService } from './../../Shared/global-function/global-function.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-voucher-item',
  templateUrl: './voucher-item.component.html',
  styleUrls: [],
})
export class VoucherItemComponent implements OnInit {
  @Input() item: any;
  @Input() isSelected: any = false;
  showQR: boolean = false;
  constructor(private globalFunction: GlobalFunctionService) {}

  ngOnInit(): void {
    this.item.PromoCard_EndDate = this.globalFunction.convertTimeToUI(
      this.item.PromoCard_EndDate
    );
  }

  public toggleShowQR() {
    this.showQR = !this.showQR;
  }
}
