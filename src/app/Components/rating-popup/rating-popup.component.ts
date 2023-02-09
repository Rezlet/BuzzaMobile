import { OrderService } from './../../Services/order/order.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { fadeInOut } from 'src/app/Services/animation';

@Component({
  selector: 'app-rating-popup',
  templateUrl: './rating-popup.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class RatingPopupComponent implements OnInit {
  @Input() isShow: any = false;
  @Input() resTicketId: any = '';
  @Output() emitShow = new EventEmitter<boolean>();
  form: FormGroup;
  ratingScore: any;
  currentRating = 3;
  constructor(private fb: FormBuilder, private orderService: OrderService) {
    // validator
    this.ratingScore = 0;
    this.form = this.fb.group({
      rating: ['', Validators.required],
      comment: [''],
    });
  }
  submit() {
    const dataToAPI = {
      ResticketId: this.resTicketId,
      Score: this.form.value.rating,
      CommentTag: this.form.value.comment,
      OtherNote: 'Note',
    };

    // submit rating
    this.orderService
      .TicketReview(JSON.stringify(dataToAPI))
      .subscribe((res: any) => {
        const Status = JSON.parse(res.result)[0].Status;
        if (Status == 1) {
          this.toggleShow();
        }
      });
  }

  ngOnInit(): void {}

  public toggleShow() {
    this.emitShow.emit(!this.isShow);
  }
}
