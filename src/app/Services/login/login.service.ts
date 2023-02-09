import { GlobalFunctionService } from './../../Shared/global-function/global-function.service';
import { GlobalConstants } from './../../Shared/global-constants';
import {
  HttpClient,
  HttpRequest,
  HttpEvent,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
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
export class LoginService {
  private apiOption = GlobalConstants.apiURL;
  constructor(private httpClient: HttpClient) {}

  getUser(numberphone: any = '') {
    return this.httpClient.get<any[]>(
      this.apiOption +
        '/User/profile/getProfileForHeader?phoneNumber=' +
        numberphone,
      httpOptions
    );
  }

  sendActiveCode(numberphone: any = '') {
    return this.httpClient.post<any[]>(
      this.apiOption + '/Authentication/SendPhoneActivateCode?LangId=1',
      {
        phoneNumber: numberphone,
      },
      httpOptions
    );
  }

  checkPhoneExist(numberphone: any = '') {
    return this.httpClient.post<any[]>(
      this.apiOption +
        '/Authentication/CheckPhoneExits?PhoneNumber=' +
        numberphone,
      httpOptions
    );
  }

  VerifyPhoneActivateCode(numberphone: any = '', activeKey: any = '') {
    return this.httpClient.post<any[]>(
      this.apiOption + '/Authentication/VerifyPhoneActivateCode?langID=1',
      {
        phoneNumber: numberphone,
        activateCode: activeKey,
      },
      httpOptions
    );
  }

  uploadFile(theFile: any) {
    // Create form data
    // Lấy token trong cookies thêm vào trong auth
    //  không biết sao phải vậy nữa nhưng đừng có sửa =)))))
    let token = GlobalFunctionService.getToken('token');
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    let httpOptions = {
      headers: headers,
    };
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append('file', theFile);
    formData.append('name', theFile.name);
    return this.httpClient.post<any[]>(
      this.apiOption + '/ImageBrowser/Upload',
      formData,
      httpOptions
    );
  }

  InformationUserGet(numberphone: any = '') {
    return this.httpClient.get<any[]>(
      this.apiOption +
        '/User/profile/getProfileForHeader?phoneNumber=' +
        numberphone,
      httpOptions
    );
  }

  getDetailUser(userId: any = '') {
    return this.httpClient.get<any[]>(
      this.apiOption + '/User/profile/getProfileUSer?userId=' + userId,
      httpOptions
    );
  }

  updateUser(dataJson: any) {
    return this.httpClient.post<any[]>(
      this.apiOption + '/User/profile/updateUserMember?JsonCode=' + dataJson,
      {},
      httpOptions
    );
  }

  FireBaseKey_Update(key: any) {
    let payload = new HttpParams();
    payload = payload.append('key', key);
    return this.httpClient.post<any[]>(
      this.apiOption + '/Authentication/FireBaseKey_Update',
      payload,
      httpOptions
    );
  }

  updateUI(): any {
    let DetailUser: any = localStorage.getItem('userInformation');
    if (DetailUser != null) {
      const objectId = JSON.parse(DetailUser).ObjectId;
      this.getDetailUser(objectId).subscribe(
        (data: any) => {
          localStorage.setItem('detailUser', data.result);
        },
        (errors) => {
          console.log(errors);
        }
      );
    }
  }
}
