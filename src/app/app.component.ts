import { MessagingService } from './Shared/messaging-service/messaging.service';
import { BrandService } from './Services/brand/brand.service';
import { NewsService } from './Services/news/news.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from './Services/notification/notification.service';

// import {app} from '../../'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'BuzzaApp';
  message: any;
  messaging: any;
  public getData() {
    if (!localStorage.getItem('news')) {
      this.service.getPosts(0).subscribe(
        (data: any) => {
          localStorage.setItem('news', data.result);
        },
        (error) => console.log(error)
      );
    }

    if (!localStorage.getItem('branches')) {
      this.brandService.branchesGetAll().subscribe(
        (data: any) => {
          localStorage.setItem('branches', data.result);
          const allBranches = JSON.parse(data.result);
          allBranches.forEach((branch: any) => {
            this.brandService
              .businessGetByName(branch.BrandID)
              .subscribe((business: any) => {
                localStorage.setItem(branch.BrandID, business.result);
              });
          });
        },
        (errors: any) => console.log(errors)
      );
    }
  }

  ngOnInit(): void {
    this.msgService.initFirebase();
    this.messaging = this.msgService.currentMessage;
  }

  constructor(
    private service: NewsService,
    private brandService: BrandService,
    private msgService: MessagingService,
    private notification: NotificationService
  ) {
    let today = new Date();
    if (!localStorage.getItem('removeTime')) {
      today.setDate(today.getDate() + 2);

      localStorage.setItem('removeTime', today.toString());
    } else {
      let json: any = localStorage.getItem('removeTime');
      let removeTime = new Date(json);
      if (removeTime < today) {
        localStorage.clear();
      }
    }
    this.getData();
  }
}
