import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { LoginService } from 'src/app/Services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  submitted = false;
  isErrors: any = false;
  loginService: any;
  router: any;
  exist: any = false;
  msg: any;

  constructor(
    private fb: FormBuilder,
    login: LoginService,
    private routerLink: Router
  ) {
    this.form = fb.group({});
    this.loginService = login;
    this.router = routerLink;
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      numberphone: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
    });
  }

  // bắt lỗi khi phát hiện
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    // lấy sđt từ form bên giao diện 
    this.submitted = true;
    console.log(this.form);
    const numberphone = this.form.value.numberphone;

    if (this.form.invalid) {
      this.isErrors = true;
      return;
    }

    this.loginService.sendActiveCode(numberphone).subscribe(
      (data: any) => {
        console.log(data);
        if (data.result == null) {
          this.isErrors = true;
          this.msg = data.msg;
          console.log(this.msg)
          return;
        }
        this.router.navigate(['/OTP']);
        localStorage.setItem('numberPhoneUser', numberphone);
      },
      (error: any) => console.log(error)
    );

    this.form.reset();
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
