import { GlobalFunctionService } from './../../../Shared/global-function/global-function.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-news',
  templateUrl: './slider-news.component.html',
  styleUrls: [],
})
export class NewsSliderComponent implements OnInit {
  @Input() listNews: any = [];
  lastUpdate: any;
  tempInterval: any;
  constructor(private functionGlobal: GlobalFunctionService) {
    this.tempInterval = setInterval(() => {
      const temp: any = this.listNews ? this.listNews[0].lastUpdate : null;
      if (temp) {
        this.lastUpdate = this.functionGlobal.convertTimeToUI(
          this.listNews[0].LastUpdate
        );
      } else clearInterval(this.tempInterval);
    }, 200);
  }
  ngOnDestroy() {
    clearInterval(this.tempInterval)
  }

  ngOnInit(): void {}
}
