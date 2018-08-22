import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from './password.validator';
import { LoginService } from './login.service';
import { User } from './User';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginUser: User;
  errorMessage: String = null;

  constructor(private formBuilder: FormBuilder, private router: Router, private service : LoginService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,PasswordValidator.checkPW]]
    });
  }

  login(){
    this.errorMessage = null;
    this.service.login(this.loginForm.value)
      .then(details => this.loginUser = details)
      .catch(error => this.errorMessage = error);

    if (this.errorMessage==null){  
      // this.router.navigateByUrl('search');
    }
  };
}
