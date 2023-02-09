import { GlobalConstants } from './../../Shared/global-constants';
import { GlobalFunctionService } from './../../Shared/global-function/global-function.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const token = GlobalFunctionService.getToken('token');
let headers = new HttpHeaders()
  // .set('content-type', 'application/json')
  .set('Authorization', 'Bearer ' + token);
// Lấy token trong cookies thêm vào trong auth
let httpOptions = {
  headers: headers,
};

@Injectable({
  providedIn: 'root',
})
export class VoucherService {
  private apiOption = GlobalConstants.apiURL;

  constructor(private HttpClient: HttpClient) {}

  Restaurant_getAll(branchID: any) {
    // phần config sử dụng cho mutipart
    return this.HttpClient.get<any[]>(
      this.apiOption +
        '/Promotion/list/ofStore?storeId=' +
        branchID +
        '&langId=1',
      httpOptions
    );
  }

  UserGet() {
    let token = GlobalFunctionService.getToken('token');
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    // Lấy token trong cookies thêm vào trong auth
    let httpOptions = {
      headers: headers,
    };
    // phần config sử dụng cho mutipart
    console.log(httpOptions);
    return this.HttpClient.get<any[]>(
      this.apiOption + '/Promotion/VoucherList/UserGet?lang=1',
      httpOptions
    );
  }
}
