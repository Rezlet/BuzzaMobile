import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-for-code',
  templateUrl: './register-for-code.component.html',
  styleUrls: [],
  animations: [fadeInOut]
})
export class RegisterForCodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
