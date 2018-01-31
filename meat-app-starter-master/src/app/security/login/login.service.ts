import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs/Observable";
import {MEAT_API_AUX} from "../../app.api"
import { User } from "app/security/login/user.model";
import 'rxjs/add/operator/do'
import { HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable()
export class LoginService{
    
    user:User;

    handleLogin(path?:string) {
        this.router.navigate(['/login',path]);   
    }

    constructor(private http:HttpClient,private router:Router){

    }

    isLoggedIn(){
        return this.user !== undefined;
    }

    login(email:string, password:string):Observable<User>{
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/x-www-form-urlencoded')

        return this.http.post<User>(`${MEAT_API_AUX}/login`,
            {email: email,password:password},{headers: headers})
            .do(user => this.user = user);
    }
}
