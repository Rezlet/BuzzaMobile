import { fadeInOut, BottomToTop } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';
// import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-input-address',
  templateUrl: './input-address.component.html',
  styleUrls: [],
  animations: [fadeInOut, BottomToTop],
})
export class InputAddressComponent implements OnInit {
  pastAddresses = [
    {
      address: '3G7 Đường 22',
      addressDetail:
        '  3G7 Đường 22, P. Bình An, Quận 2, Thành Phố Hồ Chí Minh',
    },
  ];

  showMap = false;
  showConfirmShipping: any = false;
  showInputAddress: any = true;
  constructor() {}
  // private mapRef: google.maps.Map
  ngOnInit(): void {
    // let loader = new Loader({
    //   apiKey: '',
    // });
  }

  public toggleShowMap() {
    this.showMap = !this.showMap;
  }
}
