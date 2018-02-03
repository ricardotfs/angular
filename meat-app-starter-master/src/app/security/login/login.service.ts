import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs/Observable";
import {MEAT_API_AUX} from "../../app.api"
import { User } from "app/security/login/user.model";
import 'rxjs/add/operator/do'
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class LoginService{
    
    user:User;

    constructor(private http:HttpClient){

    }

    isLoggedIn(){
        return this.user !== undefined;
    }

    login(email:string, password:string):Observable<User>{
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/x-www-form-urlencoded')
        let params = new HttpParams().set('user', JSON.stringify({email: email,password:password}));

        return this.http.post<User>(`${MEAT_API_AUX}/login`,
        {},{headers: headers,params:params})
            .do(user => this.user = user);
    }
}
