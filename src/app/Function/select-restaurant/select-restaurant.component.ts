import { fadeInOut } from '../../Services/animation';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-restaurant',
  templateUrl: './select-restaurant.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class SelectRestaurantComponent implements OnInit {
  items: any;
  brandID: any;
  bid: any;
  brandName: any;
  constructor(private route: ActivatedRoute) {
    let branches: any = localStorage.getItem('branches')
    branches = JSON.parse(branches)

    // lấy dữ liệu ra từ đường dẫn 
    this.route.params.subscribe((params: any) => {
      this.brandID = params.brandID;
      let mainBranch: any = localStorage.getItem(params.brandID);

      let branch = branches.find((branch: any) => branch.BrandID == params.brandID)
      this.brandName = branch.BrandName

      if (mainBranch != null) {
        this.items = JSON.parse(mainBranch);
      }
    });
  }

  ngOnInit(): void {}
}
