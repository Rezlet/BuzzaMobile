import { environment } from './../../environments/environment';
import { GlobalFunctionService } from './global-function/global-function.service';
import { HttpHeaders } from '@angular/common/http';

export class GlobalConstants {
  public static isProduct: boolean = false;
  // publish url 'http://buzzaapi.vnyi.com:81/api'
  // local url 'https://localhost:7299/api'
  public static apiURL: string = 'https://buzzaapi.ezitouch.com:2443/api';



  // public static httpOption: any;
}
