import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { LoginService } from 'app/security/login/login.service';
import { NotificationServices } from 'app/shared/messages/notification.services';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,
              private loginService:LoginService,
              private notificationServices:NotificationServices,
              private activatedRoute:ActivatedRoute,
              private router:Router) { }

  loginForm:FormGroup
  navigateTo:string

  ngOnInit() {
    this.loginForm = this.fb.group({
      email:this.fb.control('',[Validators.required,Validators.email]),
      password:this.fb.control('',[Validators.required]),

    })
    this.navigateTo = this.activatedRoute.snapshot.params['to'] ||btoa('/')
  }
  
  login(){
    this.loginService.login(this.loginForm.value.email,
                      this.loginForm.value.password)
                      .subscribe(
                        user=> console.log(`Bem vindo, ${user.name}`),
                        response => console.log(response.error.messages),
                        ()=>{
                          this.router.navigate([atob(this.navigateTo)])
                        }
                        );
                    
  }

}
