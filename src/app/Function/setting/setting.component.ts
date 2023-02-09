import { TranslateService } from '@ngx-translate/core';
import { Navigation } from 'swiper';
import { Router } from '@angular/router';
import { fadeInOut, ScaleY } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: [],
  animations: [fadeInOut, ScaleY],
})
export class SettingComponent implements OnInit {
  router: any;
  isShowLanguage: any;
  constructor(router: Router, private translateService: TranslateService) {
    this.router = router;
  }

  public translateLanguageTo(value: string) {
    this.translateService.use(value);
    localStorage.setItem('lang', value)
  }
  ngOnInit(): void {}

  toggleLanguage() {
    this.isShowLanguage = !this.isShowLanguage;
  }

  logout() {
    localStorage.removeItem('userInformation');
    localStorage.removeItem('numberPhoneUser');
    localStorage.removeItem('detailUser');
    localStorage.removeItem('orderDetail');
    localStorage.removeItem('currentCart');
    localStorage.removeItem('historyBooking');
    localStorage.removeItem('myVoucher');
    localStorage.removeItem('myNotification');
    localStorage.removeItem('numberUnread');
    localStorage.removeItem('numberPhoneUser');
    const time: any = new Date();
    time.setDate(time.getDate() - 1);

    document.cookie = `token= ;expires=${time}"`;
    this.router.navigate(['/']);
  }
}
