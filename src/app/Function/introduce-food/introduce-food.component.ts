import { GlobalFunctionService } from './../../Shared/global-function/global-function.service';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from './../../Services/news/news.service';
import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-introduce-food',
  templateUrl: './introduce-food.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class IntroduceFoodComponent implements OnInit {
  // hiển thị nội dung
  item: any;
  lastUpdate: any;
  listDeal: any = [];
  newsRecommend: any;
  typeButton: any;
  constructor(
    private location: Location,
    private newsService: NewsService,
    private route: ActivatedRoute,
    private functionGlobal: GlobalFunctionService
  ) {
    this.listDeal = localStorage.getItem('news');
    this.listDeal = JSON.parse(this.listDeal);
    this.listDeal = this.listDeal.slice(0, 2);
    this.route.params.subscribe((params: any) => {
      // Lấy ra ID của tin tức
      let newsID = params.id;

      this.item = localStorage.getItem('news');
      this.item = JSON.parse(this.item);
      this.item = this.item.find((element: any) => element.Id == newsID);
    });

    this.typeButton = this.item.TemplateType;
    // dùng để hiển thị và bắt sự kiện
    if (this.item.TemplateType == 17) this.typeButton = false;
    else if (54) this.typeButton = 'Đặt chỗ';
    else if (150) this.typeButton = 'Lưu mã ngay';
    else if (151) this.typeButton = 'Đặt món';

    console.log(this.item);
  }

  ngOnInit(): void {}
  moveToTop() {
    document.documentElement.scrollTop = 0;
  }

  back(): void {
    this.location.back();
  }

  catchEvent() {}
}
