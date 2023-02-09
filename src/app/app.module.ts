import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { MessagingService } from './Shared/messaging-service/messaging.service';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { PaymentPopupModule } from './Components/payment-popup/payment-popup.module';
import { SwiperModule } from 'swiper/angular';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Function/home/home.component';
import { FooterModule } from './Components/footer/footer.module';
import { SliderModule } from './Components/Slider/slider.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//#region import firebase for messaging
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';

//#region import for language
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AsyncPipe, registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';

registerLocaleData(localeVi, 'vi');
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/Languages/', '.json');
}

//#endregion
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SliderModule,
    FooterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PaymentPopupModule,
    SwiperModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgxScannerQrcodeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    AsyncPipe,
    MessagingService,
    { provide: LOCALE_ID, useValue: 'vi' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private translateService: TranslateService) {
    let lang: any = 'vi';
    if (localStorage.getItem('lang')) {
      lang = localStorage.getItem('lang');
      console.log(lang)
    }

    this.translateService.addLangs(['en', 'vi']);
    this.translateService.setDefaultLang(lang);
    localStorage.setItem('lang', lang);
    console.log(lang);
  }
}
