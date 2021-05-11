import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/model/user';
import { UserServiceService } from 'src/services/user-service.service';
import { AlertifyService } from 'src/services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup;
  user: IUser;
  userSubmitted: boolean;
  constructor(private fb: FormBuilder, private userService: UserServiceService,
    private alertify: AlertifyService) { }

  ngOnInit(): void {
    /* this.registrationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    }, this.passwordValidator); */
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required]],
      mobile: [null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    }, { Validators: this.passwordValidator });
  }

  passwordValidator(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value ? null :
      { notmatched: true };
  }


  onSubmit() {
    console.log(this.registrationForm);
    this.userSubmitted = true;
    if (this.registrationForm.valid) {
      //this.user = Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
      this.alertify.success("Successfully Registered");
  } else {
    this.alertify.error("Kindly provide the required fields");
  }
}

userData(): IUser {
  return this.user = {
    userName: this.userName.value,
    email: this.email.value,
    password: this.password.value,
    mobile: this.mobile.value
  }
}

  //getter methods for form controls
  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }

  get password() {
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }
}
