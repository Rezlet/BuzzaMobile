import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class ProfileComponent implements OnInit {
  profileInfo: any;
  updateUser: any;
  constructor() {}
  ngOnInit(): void {
    this.getLocalStorage();
  }
  public getLocalStorage() {
    let count = 0;
    if (localStorage.getItem('detailUser')) {
      this.updateUser = setInterval(() => {
        const profileInfo: any = localStorage.getItem('detailUser');
        let currentPoint: any = localStorage.getItem('profileUser');
        this.profileInfo = JSON.parse(profileInfo);
        currentPoint = JSON.parse(currentPoint);
        this.profileInfo.currentPoint = currentPoint.currentPoint;
        if (this.profileInfo != null) {
          clearInterval(this.updateUser);
        } else if (count == 10) {
          clearInterval(this.updateUser);
        }
        count++;
      }, 100);
    }
  }

  ngOnDestroy() {
    clearInterval(this.updateUser);
  }
}
