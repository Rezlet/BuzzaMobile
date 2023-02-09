import { GlobalFunctionService } from './../../Shared/global-function/global-function.service';
import { GlobalConstants } from './../../Shared/global-constants';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Thiết lập header
let token = GlobalFunctionService.getToken('token');
let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
// Lấy token trong cookies thêm vào trong auth
let httpOptions = {
  headers: headers,
};

@Injectable({
  providedIn: 'root',
})
export class FoodItemService {
  private apiOption = GlobalConstants.apiURL;

  constructor(private httpClient: HttpClient) {}

  menuItemGetABranch(branch: any) {
    return this.httpClient.get<any[]>(
      this.apiOption + '/BusinessBranch/menu/list/' + branch + '?lang=1',
      httpOptions
    );
  }

  foodItemGetByMenu(branch: any, menu: any) {
    const jsonParam = { Branch: branch, Menu: menu, page: 1, size: 18 };
    let payload = new HttpParams();
    payload = payload.append('jsonParam', JSON.stringify(jsonParam));
    return this.httpClient.post<any[]>(
      this.apiOption + '/BusinessBranch/menu/item?lang=1',
      payload,
      httpOptions
    );
  }

  foodItemGetFlashSale(idBusiness: any, brandID: any) {
    let menuID = 0;
    if (brandID == 'BUZZA') {
      menuID = 1947;
    } else if (brandID == 'KOREAN') {
      menuID = 1948;
    } else if (brandID == 'SUSHINSUSHI') {
      menuID = 1951;
    }
    const jsonParam = { Branch: idBusiness, Menu: menuID, page: 1, size: 18 };
    let payload = new HttpParams();
    payload = payload.append('jsonParam', JSON.stringify(jsonParam));
    return this.httpClient.post<any[]>(
      this.apiOption + '/BusinessBranch/menu/item?lang=1',
      payload,
      httpOptions
    );
  }

  setMenuGet(itemId: any) {
    return this.httpClient.post<any[]>(
      this.apiOption +
        '/BusinessBranch/SetmenuDetail_Get?idItem=' +
        itemId +
        '&lang=1',
      {},
      httpOptions
    );
  }
}
