import { GlobalFunctionService } from './../../Shared/global-function/global-function.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalConstants } from './../../Shared/global-constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiOption = GlobalConstants.apiURL;

  constructor(
    private HttpClient: HttpClient,
    private globalFunction: GlobalFunctionService
  ) {}

  // dùng multipart
  insertUpdateTicketOrder(json: any) {
    // phần config sử dụng cho mutipart
    let payload = new HttpParams();
    payload = payload.append('Json', json);
    let httpOptions = this.globalFunction.getHttpHeader();
    return this.HttpClient.post<any[]>(
      this.apiOption + '/Orders/insertUpdateTicketOrder?lang=1',
      payload,
      httpOptions
    );
  }

  orderDetailLoad(orderID: any) {
    let httpOptions = this.globalFunction.getHttpHeader();

    // phần config sử dụng cho mutipart
    return this.HttpClient.post<any[]>(
      this.apiOption + '/Orders/orderDetaiLoad?orderId=' + orderID,
      httpOptions
    );
  }

  sendItemOrdering(jsonParam: any) {
    let httpOptions = this.globalFunction.getHttpHeader();

    // phần config sử dụng cho mutipart
    let payload = new HttpParams();
    payload = payload.append('jsonParam', jsonParam);
    return this.HttpClient.post<any[]>(
      this.apiOption + '/Orders/sendItemOrdering?langId=1',
      payload,
      httpOptions
    );
  }

  updateAmount(jsonParam: any) {
    let httpOptions = this.globalFunction.getHttpHeader();

    // phần config sử dụng cho mutipart
    let payload = new HttpParams();
    payload = payload.append('jsonParam', jsonParam);

    return this.HttpClient.post<any[]>(
      this.apiOption + '/Orders/ItemOrder_UpdateQuantity?langId=1',
      payload,
      httpOptions
    );
  }

  Ticket_GetIdFromBarcode(jsonParam: any) {
    let httpOptions = this.globalFunction.getHttpHeader();

    return this.HttpClient.get<any[]>(
      this.apiOption +
        '/Orders/Ticket_GetIdFromBarcode?barcode=' +
        jsonParam +
        '&langId=1',
      httpOptions
    );
  }

  TicketApplyVipCard(jsonParam: any) {
    let httpOptions = this.globalFunction.getHttpHeader();

    let payload = new HttpParams();
    payload = payload.append('jsonParam', jsonParam);
    return this.HttpClient.post<any[]>(
      this.apiOption + '/Orders/TicketApplyVipCard?langId=1',
      payload,
      httpOptions
    );
  }

  TicketReview(jsonParam: any) {
    let httpOptions = this.globalFunction.getHttpHeader();

    let payload = new HttpParams();
    payload = payload.append('jsonParam', jsonParam);
    return this.HttpClient.post<any[]>(
      this.apiOption + '/Orders/TicketReview?langId=1',
      payload,
      httpOptions
    );
  }

  ItemOrder_UpdateQuantity(jsonParam: any) {
    let httpOptions = this.globalFunction.getHttpHeader();

    let payload = new HttpParams();
    payload = payload.append('jsonParam', jsonParam);
    return this.HttpClient.post<any[]>(
      this.apiOption + '/Orders/ItemOrder_UpdateQuantity?langId=1',
      payload,
      httpOptions
    );
  }

  ResticketItemHistory_Get(ticketID: any) {
    let httpOptions = this.globalFunction.getHttpHeader();

    let payload = new HttpParams();
    payload = payload.append('ticketID', ticketID);
    payload = payload.append('ticketVersion', 0);
    return this.HttpClient.post<any[]>(
      this.apiOption + '/Orders/ResticketItemHistory_Get?langId=1',
      payload,
      httpOptions
    );
  }

  Ticket_GetListByUserId() {
    let httpOptions = this.globalFunction.getHttpHeader();

    let payload = new HttpParams();
    let today: any = new Date();
    today = this.globalFunction.convertTimeToAPI(today);
    let oneMonthAgo: any = new Date();
    oneMonthAgo.setDate(oneMonthAgo.getDate() - 30);
    oneMonthAgo = this.globalFunction.convertTimeToAPI(oneMonthAgo);
    const jsonParam = {
      FromDate: oneMonthAgo,
      ToDate: today,
      LangID: 1,
    };
    console.log(jsonParam);
    payload = payload.append('jsonParam', JSON.stringify(jsonParam));
    return this.HttpClient.post<any[]>(
      this.apiOption + '/Orders/Ticket_GetListByUserId',
      payload,
      httpOptions
    );
  }

  Ticket_GetInfo(ticketID: any) {
    let httpOptions = this.globalFunction.getHttpHeader();

    let payload = new HttpParams();
    payload = payload.append('ticketID', ticketID);
    payload = payload.append('ticketVersion', 1);
    return this.HttpClient.post<any[]>(
      this.apiOption + '/Orders/Ticket_GetInfo?langId=1',
      payload,
      httpOptions
    );
  }

  MB_PaymentCreate(data: any) {
    let httpOptions = this.globalFunction.getHttpHeader();

    let payload = new HttpParams();
    payload = payload.append('jsonParam', data);

    return this.HttpClient.post<any[]>(
      this.apiOption + '/Orders/MB_PaymentCreate',
      payload,
      httpOptions
    );
  }


  Ticket_UpdateStatus(status: any, ticketID: any) {
    let httpOptions = this.globalFunction.getHttpHeader();

    let payload = new HttpParams();
    payload = payload.append('TicketId', ticketID);

    return this.HttpClient.post<any[]>(
      this.apiOption + '/Orders/Ticket_UpdateStatus?status=' + status,
      payload,
      httpOptions
    );
  }

  
}
