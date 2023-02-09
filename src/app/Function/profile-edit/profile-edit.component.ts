import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login/login.service';
import { fadeInOut } from './../../Services/animation';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: [],
  animations: [fadeInOut],
})
export class ProfileEditComponent implements OnInit {
  profileInfo: any = {};
  gender: any;
  date = new Date();
  LoginService: any;
  hasUser = false;
  isSuccess = false;
  updateUser: any
  public getLocalStorage() {
    let count = 0;
    this.updateUser = setInterval(() => {
      this.profileInfo = localStorage.getItem('detailUser');
      if (this.profileInfo != null) {
        this.profileInfo = JSON.parse(this.profileInfo);
        clearInterval(this.updateUser);
      } else if (count == 10) {
        clearInterval(this.updateUser);
      }
      count++;
    }, 200);
  }

  ngOnDestroy() {
    clearInterval(this.updateUser);
  }
  
  constructor(
    LoginService: LoginService,
    private viewContainerRef: ViewContainerRef,
    private router: Router
  ) {
    if (!localStorage.getItem('detailUser')) {
      this.router.navigate(['/login']);
    }
    this.getLocalStorage();
    this.LoginService = LoginService;
  }

  ngOnInit(): void {}

  setLocalStore(dataToAPI: any) {
    this.profileInfo.Address = dataToAPI.Address;
    this.profileInfo.DateOfBirth = dataToAPI.DayOfBirth;
    this.profileInfo.Email = dataToAPI.Email;
    this.profileInfo.Username = dataToAPI.FirstName;
    this.profileInfo.PhoneNumber = dataToAPI.Phone;
    this.profileInfo.Gender = dataToAPI.Gender;
    // đè lên detailUser cũ
    localStorage.setItem('detailUser', JSON.stringify(this.profileInfo));
  }

  public onSubmit(data: any) {
    let dataToAPI = {
      MemberId: this.profileInfo.Id,
      FirstName: data.name,
      LastName: '',
      DayOfBirth: data.date + ' 00:00:00',
      Gender: data.gender,
      Email: data.gmail,
      // ProfilePicture: this.profileInfo.ProfilePicture,
      Phone: this.profileInfo.PhoneNumber,
      Address: this.profileInfo.Address,
      CreateBy: this.profileInfo.Id,
    };
    const JSONdata = JSON.stringify(dataToAPI);
    this.setLocalStore(dataToAPI);
    this.viewContainerRef.clear();
    this.LoginService.updateUser(JSONdata).subscribe((data: any) => {
      const result = JSON.parse(data.result)[0];
      if (result.Column1 == 1) {
        this.isSuccess = true;
      }
    });
    this.uploadFileAPI();
    // this.uploadFile();
    // reload lại data mới
    // window.location.reload();
  }

  uploadFileAPI() {
    this.LoginService.uploadFile(this.theFile).subscribe((res: any) => {
      console.log(res);
    });
  }

  // xử lý ảnh dạng byte
  uploadFile(): void {
    this.readAndUploadFile(this.theFile);
  }

  file: any;
  theFile: any = null;
  messages: any;
  MAX_SIZE: number = 1048576;
  onFileChange(event: any) {
    this.theFile = null;

    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.messages = 'You must select an image';
      this.isSuccess = false;

      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.isSuccess = false;

      this.messages = 'Only images are supported';
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    if (event.target.files && event.target.files.length > 0) {
      // Don't allow file sizes over 1MB
      if (event.target.files[0].size < this.MAX_SIZE) {
        // Set theFile property
        this.messages = '';
        this.theFile = event.target.files[0];
      } else {
        // Display error message
        this.isSuccess = false;
        this.messages =
          'File: ' + event.target.files[0].name + ' is too large to upload.';
      }
    }

    reader.onload = (_event) => {
      this.messages = '';
      this.profileInfo.ProfilePicture = reader.result;
      console.log(this.profileInfo.ProfilePicture);
    };
  }

  private readAndUploadFile(theFile: any) {
    let file: any;

    // Set File Information
    file.fileName = theFile.name;
    file.fileSize = theFile.size;
    file.fileType = theFile.type;
    file.lastModifiedTime = theFile.lastModified;
    file.lastModifiedDate = theFile.lastModifiedDate;

    // Use FileReader() object to get file to upload
    // NOTE: FileReader only works with newer browsers
    let reader = new FileReader();

    // Setup onload event for reader
    reader.onload = () => {
      // Store base64 encoded representation of file
      file.fileAsBase64 = reader.result ? reader.result.toString() : '';

      // POST to server
      this.LoginService.uploadFile(file).subscribe((resp: any) => {
        this.messages.push('Upload complete');
      });
    };

    // Read the file
    reader.readAsDataURL(theFile);
  }
}
