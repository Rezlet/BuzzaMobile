import { GlobalFunctionService } from './../../Shared/global-function/global-function.service';
import { GlobalConstants } from './../../Shared/global-constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Thiết lập header
let token = GlobalFunctionService.getToken('token');
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
export class BrandService {
  private apiOption = GlobalConstants.apiURL;

  constructor(private httpClient: HttpClient) {}

  branchesGetAll() {
    return this.httpClient.get<any[]>(
      this.apiOption + '/BusinessBranch/listBranch?lang=1',
      httpOptions
    );
  }

  businessGetByName(name: any) {
    return this.httpClient.get<any[]>(
      this.apiOption + '/BusinessBranch/listBusinessBranch/' + name + '?lang=1',
      httpOptions
    );
  }
}
