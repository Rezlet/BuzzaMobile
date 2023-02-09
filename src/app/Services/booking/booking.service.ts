import { GlobalFunctionService } from './../../Shared/global-function/global-function.service';
import { GlobalConstants } from './../../Shared/global-constants';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Thiết lập header (mẫu )
// let token = GlobalFunctionService.getToken('token');
// let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
// Lấy token trong cookies thêm vào trong auth
// let httpOptions = {
//   headers: headers,
// };

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private apiOption = GlobalConstants.apiURL;
  constructor(private httpClient: HttpClient) {}
  // need token
  bookingCreateAndUpdate(jsonParam: any) {
    let token = GlobalFunctionService.getToken('token');
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    // Lấy token trong cookies thêm vào trong auth
    let httpOptions = {
      headers: headers,
    };

    let payload = new HttpParams();
    payload = payload.append('jsonParam', jsonParam);

    return this.httpClient.post<any[]>(
      this.apiOption + '/Reservation/CreateAndUpdate?lang=1',
      payload,
      httpOptions
    );
  }
  // need token

  listHistoryGet() {
    let token = GlobalFunctionService.getToken('token');
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    // Lấy token trong cookies thêm vào trong auth
    let httpOptions = {
      headers: headers,
    };
    console.log(httpOptions);
    return this.httpClient.get<any[]>(
      this.apiOption + '/Reservation/HistoryGet?page=1&lang=1',
      httpOptions
    );
  }

  cancelBooking(ReserId: any) {
    let token = GlobalFunctionService.getToken('token');
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    // Lấy token trong cookies thêm vào trong auth
    let httpOptions = {
      headers: headers,
    };
    return this.httpClient.post<any[]>(
      this.apiOption +
        '/Reservation/StatusUpdate?ReserId=' +
        ReserId +
        '&lang=1',
      {},
      httpOptions
    );
  }
}
