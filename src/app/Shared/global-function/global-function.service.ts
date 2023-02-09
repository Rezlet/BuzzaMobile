import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalFunctionService {
  constructor() {}

  convertTimeToAPI(time: any) {
    let year = time.getFullYear();
    let month =
      time.getMonth() + 1 < 10
        ? '0' + (time.getMonth() + 1)
        : time.getMonth() + 1;
    let date = time.getDate() < 10 ? '0' + time.getDate() : time.getDate();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    const timeString =
      year +
      '-' +
      month +
      '-' +
      date +
      ' ' +
      hours +
      ':' +
      minutes +
      ':' +
      seconds;

    return timeString;
  }

  getHttpHeader() {
    const token = GlobalFunctionService.getToken('token');
    let headers = new HttpHeaders()
      // .set('content-type', 'application/json')
      .set('Authorization', 'Bearer ' + token);
    // Lấy token trong cookies thêm vào trong auth
    let httpOptions = {
      headers: headers,
    };
    return httpOptions;
  }

  convertTimeToUI(time: any, symbol: any = '-') {
    let convert = new Date(time);

    let year = convert.getFullYear();
    let month =
      convert.getMonth() + 1 < 10
        ? '0' + (convert.getMonth() + 1)
        : convert.getMonth() + 1;
    let date =
      convert.getDate() < 10 ? '0' + convert.getDate() : convert.getDate();
    const timeString = year + symbol + month + symbol + date;

    return timeString;
  }

  static getToken(cookieName: any) {
    let cookie: any = {};
    document.cookie.split(';').forEach(function (el) {
      let [key, value] = el.split('=');
      cookie[key.trim()] = value;
    });

    return cookie[cookieName];
  }
}
