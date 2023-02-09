import { Router } from '@angular/router';
import { GlobalFunctionService } from './../../Shared/global-function/global-function.service';
import { OrderService } from './../../Services/order/order.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-order-layout',
  templateUrl: './order-layout.component.html',
  styleUrls: [],
})
export class OrderLayoutComponent implements OnInit {
  @Input() showFoodItem: any = false;
  @Input() item: any;
  @Output() emitShow = new EventEmitter<boolean>();
  constructor(private orderService: OrderService, private router: Router) {}
  @Input() setMenu1: any;
  @Input() setMenu2: any;
  showPayment: any = false;
  dataToAPI: any;
  Amount: any = 1;
  note: any = '';
  showSuccess: any = false;
  // Tính thời tiền của 1 suất ăn
  priceForOne: any = 0;
  // Tiền đê hiển thị ra màn hình
  priceToShow: any = 0;
  ngOnInit(): void {
    console.log(this.item);
    let orderDetail: any = localStorage.getItem('orderDetail');
    orderDetail = JSON.parse(orderDetail);
    this.dataToAPI = {
      OrderingInfo: {
        // Món chính
        OrderingData: {
          OrderId: 0, // 0 là tạo mới
          OrderNo: orderDetail ? orderDetail.OrderNo : '0', // vị trí là online
          OrderDetailID: orderDetail ? orderDetail.OrderDetailID : 0, //
          ItemId: this.item.itemid, // id món ăn
          ItemName: this.item.itemname, // Tên món ăn
          ItemNameLang: '', // Tên món ăn bằng tiếng anh
          UomID: 2, //
          UomName: 'Phần', // đơn vị tính
          Quantity: this.Amount, // số lượng
          UnitPrice: this.item.itemprice, // giá trên mỗi đơn vị
          ServiceChargePer: 0, //
          DiscountPer: 0, // giảm giá
          ExcisePer: 0, //
          VATPer: 8, //
          WaitingTime: 0, // thời gian chờ
          IsPromotionItem: 0, // Có đang khuyến mãi không
          IsSubItem: 0, //
          ItemNote: this.note, // note của khách hàng
          OrderDetailId: 0, //
        },
        // các món phụ
        OrderingSetData: [],
        TableID: 0, // online
        AreaID: this.item.branchid, // ID chi nhánh
        NumberofGuest: 1, // số người dùng
        TicketID: orderDetail ? orderDetail.TicketID : 0, //
        POSID: 9, // web sẽ bằng 9
        TicketCode: orderDetail ? orderDetail.TicketCode : '0',
      },
    };

    this.priceForOne = this.item.itemprice;
    this.priceToShow = this.priceForOne;
  }

  public toggleShowFoodItem() {
    this.emitShow.emit(!this.showFoodItem);
  }

  public togglePayment() {
    this.showPayment = !this.showPayment;
  }

  public getPayment(value: any) {
    this.showPayment = value;
  }

  public getSetValue(value: any) {
    const idSubItem = value.target.value;

    const subItem = this.setMenu2.find(
      (item: any) => item.PIT_ITEMNO == idSubItem
    );
    // Nếu chọn thì thêm vào mảng

    if (value.target.checked) {
      let temp: any = {
        ItemId: subItem.PIT_AUTOID, // ID món phụ
        ItemNo: subItem.PIT_ITEMNO, // Mã món phụ
        ItemName: subItem.PIT_NAME, // Tên món phụ
        ItemNameLang: 'AD001', //
        UomId: 2, //  Đơn vị tính
        UomName: subItem.UOM_NAME, // Đơn vị tính
        BaseQty: 1, //
        ChoiceQty: 1, // Số lượng
        BaseChangeAmount: subItem.RECS_AMOUNT_PERCENT, // Giá tiền
        ChoiceAmount: 0, //
        IsDefault: 0, //
        IsCanChange: true, // Có thể thay đổi (mặc định)
        SubDisplayOrder: 0, // Kệ
        MinChoice: 1, // (mặc định)
        MaxChoice: 20, // (mặc định)
        OrderDetailSetId: 0, //  Tạo mới set ID (mặc định)
        OrderDetailId: 0, // Tạo mới ID ( mặc định )
        ItemNote: '', // note của item con (không có)
        ItemParentId: subItem.PIT_AUTOID1, // id của item cha
      };
      this.dataToAPI.OrderingInfo.OrderingSetData.push(temp);

      this.priceForOne += subItem.RECS_AMOUNT_PERCENT;
      this.priceToShow = this.priceForOne * this.Amount;
    } else {
      this.dataToAPI.OrderingInfo.OrderingSetData =
        this.dataToAPI.OrderingInfo.OrderingSetData.filter(
          (item: any) => item.ItemId != subItem.PIT_AUTOID
        );
      this.priceForOne -= subItem.RECS_AMOUNT_PERCENT;
      this.priceToShow = this.priceForOne * this.Amount;
    }
  }

  public increaseAmount() {
    this.Amount++;
    this.dataToAPI.OrderingInfo.OrderingData.Quantity = this.Amount;
    this.priceToShow = this.priceForOne * this.Amount;
  }

  public decreaseAmount() {
    if (this.Amount > 0) {
      this.Amount--;
      this.dataToAPI.OrderingInfo.OrderingData.Quantity = this.Amount;
      this.priceToShow = this.priceForOne * this.Amount;
    }
  }
  public getNote(value: any) {
    this.note = value.target.value;
  }

  public addCart() {
    if (!GlobalFunctionService.getToken('token')) {
      this.router.navigate(['/login']);
      return;
    }

    let orderDetail: any = localStorage.getItem('orderDetail');
    orderDetail = JSON.parse(orderDetail);
    // các thông tin lưu để biết hóa đơn của bàn nào
    this.dataToAPI.OrderingInfo.OrderingData.OrderId = orderDetail
      ? orderDetail.OrderId
      : 0;

    this.dataToAPI.OrderingInfo.TicketID = orderDetail
      ? orderDetail.TicketID
      : 0;

    (this.dataToAPI.OrderingInfo.OrderingData.OrderNo = orderDetail
      ? orderDetail.OrderNo
      : '0'),
      (this.dataToAPI.OrderingInfo.TicketCode = orderDetail
        ? orderDetail.TicketCode
        : ''),
      (this.showFoodItem = !this.showFoodItem);

    this.orderService
      .insertUpdateTicketOrder(JSON.stringify(this.dataToAPI))
      .subscribe((data: any) => {
        let orderDetail: any = JSON.parse(data.result);
        let TicketID = orderDetail.Ticket[0].TicketId;
        let TicketCode = orderDetail.Ticket[0].TicketCode;
        let temp: any = {};

        console.log(orderDetail);
        //  lấy ra phần order
        if (!(orderDetail.Order.length == 0)) {
          orderDetail = orderDetail.Order;
          // thêm những dữ liệu cần thiết vào local
          temp.OrderId = orderDetail[0].OrderId;
          temp.OrderNo = orderDetail[0].OrderNo;
        }
        temp.TicketID = TicketID;
        temp.TicketCode = TicketCode;
        localStorage.setItem('orderDetail', JSON.stringify(temp));
        localStorage.setItem('currentCart', JSON.stringify(orderDetail));
        //  hiển thị layout đặt hàng thành công
        // this.showSuccess = true;
      });
  }

  catchEmit(value: any) {
    this.showSuccess = value;
  }
}
