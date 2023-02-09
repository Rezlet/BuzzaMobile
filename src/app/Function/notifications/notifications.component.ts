import { NotificationService } from './../../Services/notification/notification.service';
import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class NotificationsComponent implements OnInit {
  notifications: any = [];
  constructor(private NotiService: NotificationService) {}

  ngOnInit(): void {
    let temp: any = localStorage.getItem('myNotification');
    this.notifications = JSON.parse(temp);
  }

  markAll() {
    this.NotiService.markAllRead().subscribe((res: any) => {
      console.log(res);
    });

    this.NotiService.numberUnread().subscribe((data: any) => {
      let numberUnread: any = JSON.parse(data.result)[0].NumberUnread;
      console.log(numberUnread);
      localStorage.setItem('numberUnread', JSON.stringify(numberUnread));
    });

    this.notifications.map((notification: any) => {
      notification.LastSeen = Date();
    });

    localStorage.setItem('myNotification', JSON.stringify(this.notifications));
  }

  readNoti(value: any) {
    console.log(value);
    this.NotiService.markAsRead(value).subscribe((res: any) => {
      console.log(res);
    });

    this.notifications.map((notification: any) => {
      if (notification.Id == value) {
        notification.LastSeen = Date();
      }
    });

    this.NotiService.numberUnread().subscribe((data: any) => {
      let numberUnread: any = JSON.parse(data.result)[0].NumberUnread;
      console.log(numberUnread);
      localStorage.setItem('numberUnread', JSON.stringify(numberUnread));
    });
    localStorage.setItem('myNotification', JSON.stringify(this.notifications));
    console.log(value);
  }
}
