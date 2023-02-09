import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nice-deal',
  templateUrl: './nice-deal.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class NiceDealComponent implements OnInit {
  listDeal: any = [];

  constructor() {
    this.listDeal = localStorage.getItem('news');
    this.listDeal = JSON.parse(this.listDeal);
    // this.listDeal = this.listDeal.slice(0, 2);
  }

  ngOnInit(): void {}
}
