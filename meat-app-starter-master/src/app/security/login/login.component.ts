import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { LoginService } from 'app/security/login/login.service';
import { NotificationServices } from 'app/shared/messages/notification.services';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,
              private loginService:LoginService,
              private notificationServices:NotificationServices) { }

  loginForm:FormGroup

  ngOnInit() {
    this.loginForm = this.fb.group({
      email:this.fb.control('',[Validators.required,Validators.email]),
      password:this.fb.control('',[Validators.required]),

    })
  }
  
  login(){
    this.loginService.login(this.loginForm.value.email,
                      this.loginForm.value.password)
                      .subscribe(
                        user=> this.notificationServices.notify(`Bem vindo, ${user.name}`),
                        response => this.notificationServices.notify(response.error.messages)
                        );
                    
  }

}
