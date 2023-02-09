import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-change',
  templateUrl: './select-change.component.html',
  styleUrls: [],
})
export class SelectChangeComponent implements OnInit {
  @Input() items: any;
  @Output() newValue = new EventEmitter<string>();
  selecting = 0;
  ratio: any;
  constructor() {}

  getNewValue(value: any) {
    this.newValue.emit(value.value);
  }

  ngOnInit(): void {
    this.ratio = 100 / this.items.length;
  }

  public changeSelecting(number: any) {
    this.selecting = number;
  }
}
