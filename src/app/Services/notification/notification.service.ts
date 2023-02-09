import { GlobalConstants } from './../../Shared/global-constants';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { GlobalFunctionService } from './../../Shared/global-function/global-function.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private apiOption = GlobalConstants.apiURL;

  constructor(private HttpClient: HttpClient) {}
  getAll() {
    // phần config sử dụng cho mutipart
    let token = GlobalFunctionService.getToken('token');
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    // Lấy token trong cookies thêm vào trong auth
    let httpOptions = {
      headers: headers,
    };
    return this.HttpClient.post<any[]>(
      this.apiOption + '/Notifications/getAll?page=1&pageSize=10&langId=1',
      {},
      httpOptions
    );
  }

  numberUnread() {
    let token = GlobalFunctionService.getToken('token');
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    // Lấy token trong cookies thêm vào trong auth
    let httpOptions = {
      headers: headers,
    };
    // phần config sử dụng cho mutipart
    return this.HttpClient.post<any[]>(
      this.apiOption + '/Notifications/numberUnread?langId=1',
      {},
      httpOptions
    );
  }

  markAsRead(CampaignId: any) {
    let token = GlobalFunctionService.getToken('token');
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    // Lấy token trong cookies thêm vào trong auth
    let httpOptions = {
      headers: headers,
    };
    return this.HttpClient.post<any[]>(
      this.apiOption +
        '/Notifications/markAsRead?CampaignId=' +
        CampaignId +
        '&langId=1',
      {},
      httpOptions
    );
  }


  markAllRead() {
    let token = GlobalFunctionService.getToken('token');
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    // Lấy token trong cookies thêm vào trong auth
    let httpOptions = {
      headers: headers,
    };
    return this.HttpClient.post<any[]>(
      this.apiOption +
        '/Notifications/markAllRead?langId=1',
      {},
      httpOptions
    );
  }
}
