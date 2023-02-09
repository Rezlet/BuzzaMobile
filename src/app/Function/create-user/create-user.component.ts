import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login/login.service';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class CreateUserComponent implements OnInit {
  numberPhone: any;
  userForm: any;
  isErrors: any = false;
  isSubmit: any = false;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.numberPhone = localStorage.getItem('numberPhoneUser');
  }

  get f(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  onSubmit() {
    if (this.f['Email'].errors) {
      console.log(this.f['Email'].errors['required']);
    }
    this.isSubmit = true;
    if (this.f['username'].errors != null || this.f['Email'].errors != null) {
      this.isErrors = true;
      return;
    }
    // nếu không có lỗi thì chuyển lỗi thành false
    this.isErrors = false;
    let userDetail: any;
    if (localStorage.getItem('detailUser')) {
      const temp: any = localStorage.getItem('detailUser');
      userDetail = JSON.parse(temp);
    }
    let dataToAPI: any = {
      MemberId: userDetail.Id,
      FirstName: this.userForm.value.username,
      LastName: '',
      DayOfBirth: '2001-11-11 09:57:34',
      Gender: 1,
      Email: this.userForm.value.Email,
      Phone: localStorage.getItem('numberPhoneUser'),
      Address: 'Phan Văn Trị, P2, q5',
      ImageUrl: 'image-ff2b2d22-e645-491c-a483-3dee97148169.jpg',
      CreateBy: userDetail.Id,
    };
    dataToAPI = JSON.stringify(dataToAPI);
    this.loginService.updateUser(dataToAPI).subscribe((data: any) => {
      const result: any = JSON.parse(data.result);
      let isSuccess = result[0].Column1 == 1;

      if (isSuccess) {
        userDetail.Username = this.userForm.value.username;
        userDetail.Email = this.userForm.value.Email;
        localStorage.setItem('detailUser', JSON.stringify(userDetail));
        localStorage.setItem('updateUser', '1');
        this.router.navigate(['/']);
      }
    });
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  public checkActive(event: any) {
    const element = event.target;
    if (element.value != '') {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  }
}
