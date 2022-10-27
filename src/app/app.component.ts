import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { User } from './_helpers/user.interface';
import { UserService } from './_helpers/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'registrationapp';
  // registerForm : FormGroup = new FormGroup{()}
  registerForm: FormGroup;
  users: User[] = [];
  constructor(private _toastr: ToastrService, private _fb: FormBuilder, private _userService: UserService) {

  }

  ngOnInit() {
    this.setFormState();

  }

  setFormState() {
    this.registerForm = this._fb.group({
      id: [0],
      title: ['', Validators.required],
      firstname: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
      lastname: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      dob: ['', Validators.required, Validators.pattern('(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/[1-2][0-9]{3}')],
      password: ['', Validators.compose([Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.required]
    })
  }

  onSubmit() {

    if (this.registerForm.invalid) {
      return;
    }

  }

  onCancle() {
    this.registerForm.reset();
  }

  getUsers() {
    this._userService.getUsers().subscribe((res: User[]) => {
      this.users = res;
      console.log(res);
    });
  }

  Edit(userId:number){
    alert();
  }

  Delete(userId:number){
  }
}
