import { ActivatedRoute } from '@angular/router';
import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-voucher',
  templateUrl: './detail-voucher.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class DetailVoucherComponent implements OnInit {
  currentVoucher: any = {};
  typeButton: any = false
  constructor(private route: ActivatedRoute) {
    let temp: any = localStorage.getItem('listVouchers');
    temp = JSON.parse(temp);

    // lấy giá trị từ đường dẫn 
    this.route.params.subscribe((params: any) => {
      console.log(params.id);
      this.currentVoucher = temp.find(
        (element: any) => element.Id == params.id
      );
      console.log(this.currentVoucher);
    });

    if (this.currentVoucher.TemplateType == 17) this.typeButton = false;
    else if (54) this.typeButton = 'Đặt chỗ';
    else if (150) this.typeButton = 'Lưu mã ngay';
    else if (151) this.typeButton = 'Đặt món';
  }

  ngOnInit(): void {}
}
