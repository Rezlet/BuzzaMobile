import { GlobalFunctionService } from './../../Shared/global-function/global-function.service';
import { GlobalConstants } from './../../Shared/global-constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Thiết lập header
const token = GlobalFunctionService.getToken('token');
let headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Authorization', 'Bearer ' + token);
// Lấy token trong cookies thêm vào trong auth
let httpOptions = {
  headers: headers,
};

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiOption = GlobalConstants.apiURL;

  constructor(private httpClient: HttpClient) {}

  getPosts(storeId: any) {
    return this.httpClient.get<any[]>(
      this.apiOption + '/Promotion/list/ofStore?storeId=' + storeId + '&langId=1',
      httpOptions
    );
  }

  getDetailNews(id: any) {
    return this.httpClient.get<any[]>(
      this.apiOption + '/Promotion/detail?PromoteId=' + id + '&langId=1',
      httpOptions
    );
  }

  testBear() {
    console.log(httpOptions);
    return this.httpClient.get<any[]>(
      this.apiOption +
        '/APPConfig/LoadConfig?jsonParam=%7B%22APPCode%22%3A%22BuzzaPizza%22%2C%22ConfigKey%22%3A%22APPGuidanceURL%22%7D&lang=1',
      httpOptions
    );
  }
}
