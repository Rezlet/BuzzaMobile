import { VoucherService } from './../../Services/voucher/voucher.service';
import { fadeInOut } from './../../Services/animation';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-voucher-item',
  templateUrl: './your-voucher-item.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class YourVoucherItemComponent implements OnInit {
  @Input() item: any;
  @Input() isHorizontal: any = true;
  constructor(VoucherService: VoucherService) {}

  ngOnInit(): void {}
}
