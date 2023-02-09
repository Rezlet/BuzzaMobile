import { OrderService } from './../../Services/order/order.service';
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-payment-popup',
  templateUrl: './payment-popup.component.html',
  styleUrls: [],
})
export class PaymentPopupComponent implements OnInit {
  @Input() isShow: any = false;
  @Output() emitShow = new EventEmitter<boolean>();

  hasItems: any = false;
  listItemInOrder: any;
  totalPrice: any = 0;
  listItemChanged: any = [];
 
  listOptions = [
    { title: 'Buzza Pizza', value: 'buzza' },
    { title: 'Korean Grill', value: 'grill' },
    { title: 'Sushi In Sushi', value: 'sushi' },
  ];

  // khi thay đổi toggle phần cart thì cập nhập lại giỏi hàng
  ngOnChanges(changes: SimpleChanges) {
    if (localStorage.getItem('currentCart')) {
      let isChange = this.listItemChanged.length != 0 ? true : false;
      if (isChange) {
        this.listItemChanged.map((element: any) => {
          this.orderService
            .ItemOrder_UpdateQuantity(JSON.stringify(element))
            .subscribe((res: any) => {
              let orderHistory: any = localStorage.getItem('currentCart');
              const itemChanged = JSON.parse(res.result)[0];
              orderHistory = JSON.parse(orderHistory);
              console.log(orderHistory);
              orderHistory.map((element: any) => {
                if (element.OrderDetailID == itemChanged.OrderDetailId) {
                  element.MoneyVAT = itemChanged.MoneyVAT;
                  element.PriceWithChoice = itemChanged.PriceWithChoice;
                  element.Quantity = itemChanged.Quantity;
                  element.TotalAmount = itemChanged.TotalAmount;
                  element.UnitPrice = itemChanged.UnitPrice;
                  element.VAT = itemChanged.VAT;
                }
              });

              localStorage.setItem('currentCart', JSON.stringify(orderHistory));
            });
        });
        this.listItemChanged = [];
      }

      this.totalPrice = 0;
      this.listItemInOrder = localStorage.getItem('currentCart');
      this.listItemInOrder = JSON.parse(this.listItemInOrder);
      //  hiển thị item
      this.hasItems = true;

      // tính tổng giá tiền
      this.listItemInOrder.map((item: any) => {
        this.totalPrice = this.totalPrice + item.TotalAmount;

        item.editing = false;
      });
    }
  }

  constructor(private orderService: OrderService) {}

  increase(item: any) {
    console.log(item);
    this.totalPrice = this.totalPrice + (item.PriceWithChoice + item.VATAmount);
    // set các giá trị để hiển thị
    item.Quantity++;
    item.TotalAmount = (item.TotalAmount / (item.Quantity - 1)) * item.Quantity;
    // dùng để thêm vào API khi co chỉnh sửa
    let dataToAPI: any = {
      OrderDetailId: item.OrderDetailID,
      Quantity: item.Quantity,
    };

    // kiểm tra phần tử này đã được chỉnh sửa chưa
    let isChanged = this.listItemChanged.filter((element: any) => {
      return element.OrderDetailId == dataToAPI.OrderDetailId;
    });
    // có thì chỉ đổi số lượng
    if (isChanged.length != 0) {
      this.listItemChanged.map((element: any) => {
        if (element.OrderDetailId == dataToAPI.OrderDetailId) {
          element.Quantity = dataToAPI.Quantity;
        }
      });
    } else {
      // không thì thêm vào mảng

      this.listItemChanged.push(dataToAPI);
    }
  }

  decrease(item: any) {
    this.totalPrice = this.totalPrice - (item.PriceWithChoice + item.VATAmount);
    // giống cái increase
    item.Quantity--;
    item.TotalAmount = (item.TotalAmount / (item.Quantity + 1)) * item.Quantity;
    let dataToAPI: any = {
      OrderDetailId: item.OrderDetailID,
      Quantity: item.Quantity,
    };
    let isChanged = this.listItemChanged.filter((element: any) => {
      return element.OrderDetailId == dataToAPI.OrderDetailId;
    });

    if (isChanged.length != 0) {
      this.listItemChanged.map((element: any) => {
        if (element.OrderDetailId == dataToAPI.OrderDetailId) {
          element.Quantity = dataToAPI.Quantity;
        }
      });
    } else {
      this.listItemChanged.push(dataToAPI);
    }
  }

  ngOnInit(): void {
    console.log(this.listItemInOrder);
    if (this.listItemInOrder && this.listItemInOrder?.length != 0) {
      this.listItemInOrder.map((item: any) => {
        item.IsEditing = false;
      });
    }
  }

  toggleEditing(item: any) {
    item.IsEditing = !item.IsEditing;
  }
  public toggleShowPayment() {
    this.emitShow.emit(!this.isShow);
  }
}
