import { GlobalFunctionService } from './../global-function/global-function.service';
import { environment } from './../../../environments/environment.prod';
import { onBackgroundMessage } from 'firebase/messaging/sw';
import { GlobalConstants } from './../global-constants';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import {
  getMessaging,
  getToken,
  isSupported,
  onMessage,
} from 'firebase/messaging';
import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { initializeApp } from 'firebase/app';
import { BehaviorSubject } from 'rxjs';

const token = GlobalFunctionService.getToken('token');
let headers = new HttpHeaders()
  // .set('content-type', 'application/json')
  .set(
    'Authorization',
    'key=AAAANZL0Icc:APA91bHkAbX-zwvWXkd_QxSmqtsYtFKjFljyQ6kF4s2uNCGXe0ZhjrK_-3qVNsP9gIRFZbE-ye8JmqvGSajrGeg5IYACqLpV1swUzm9Rs3clX09Ol9mBfhK5yYIeFwqHpynQnL3bJvXJ'
  )
  .set('Authorization', 'Bearer ' + token);
// Lấy token trong cookies thêm vào trong auth
let httpOptions = {
  headers: headers,
};
@Injectable()
export class MessagingService {
  currentMessage = new BehaviorSubject<any>(null);
  app: any = initializeApp(environment.firebase);
  messaging = getMessaging();
  token: any;
  private apiOption = GlobalConstants.apiURL;

  constructor(
    private angularFirebaseMessaging: AngularFireMessaging,
    private HttpClient: HttpClient
  ) {}

  initFirebase() {
    const messaging = getMessaging();

    this.requestPerm();

    this.angularFirebaseMessaging.messages.subscribe((payload) => {
      console.log('new message received. ', payload);
      this.currentMessage.next(payload);
    });
  }

  requestPerm() {
    const messaging = getMessaging();
    getToken(messaging, {
      vapidKey:
        'BISpd7XuNhz1w-YDzzxkNVSBuMjGDKhauaavOhsCKNWCo72BxMaPupwUoIfv1CWt0fPMSSzUOLqK8G0uBeU7KZ4',
    })
      .then((currentToken) => {
        if (currentToken) {
          console.log('call get Token');
          // lấy ra token
          console.log(currentToken);
          this.token = currentToken;
          // Send the token to your server and update the UI if necessary
          // ...
        } else {
          // Show permission request UI
          console.log(
            'No registration token available. Request permission to generate one.'
          );
          // ...
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
      });
  }

  saveToken(token: any) {
    console.log(token);

    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    // Lấy token trong cookies thêm vào trong auth
    let httpOptions = {
      headers: headers,
    };

    let payload = new HttpParams();
    payload = payload.append('key', token);
    return this.HttpClient.post<any[]>(
      this.apiOption + '/Authentication/FireBaseKey_Update',
      payload,
      httpOptions
    );
  }

  sendMessage() {
    const message = {
      notification: {
        title: '$FooCorp up 1.43% on the day',
        body: '$FooCorp gained 11.80 points to close at 835.67, up 1.43% on the day.',
      },
      to: 'fh-EFKmISLKiR8GfavUbNr:APA91bHk5QYKbYBwb89jMrWNY9Na2F_2W19kknKf19ulre1PEG-kNyn_PYv6lrlZTvRnzTkZF8FW91GhRfVakY5BJYyB5UCUrvuM_n4SYHJlytYlERLr8di-ASTTv1mL8QovI5NA8WOq',
    };

    return this.HttpClient.post<any[]>(
      'https://fcm.googleapis.com/fcm/send',
      message,
      httpOptions
    );
  }
}
