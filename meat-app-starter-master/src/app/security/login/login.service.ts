import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs/Observable";
import { MEAT_API_AUX } from "../../app.api"
import { User } from "app/security/login/user.model";
import 'rxjs/add/operator/do'
import { HttpHeaders } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";
import { Router, NavigationEnd } from "@angular/router";
import 'rxjs/add/operator/filter'


@Injectable()
export class LoginService {

    user: User;
    lastUrl: string

    constructor(private http: HttpClient, private router: Router) {
        this.router.events.filter(e => e instanceof NavigationEnd)
            .subscribe((e: NavigationEnd) => this.lastUrl = e.url)
    }

    logout() {
        this.user = undefined
    }

    handleLogin(path: string = this.lastUrl) {
        this.router.navigate(['/login', btoa(path)])
    }

    isLoggedIn() {
        return this.user !== undefined;
    }

    login(email: string, password: string): Observable<User> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*',
            }),
        };

        //return this.http.post<User>(`${MEAT_API_AUX}/login`,{ email: email, password: password },httpOptions)
        //.map(user => this.user = user);
        return this.http.get<User>(`${MEAT_API_AUX}/login${1}`)

        //return this.http.post<User>(`${MEAT_API_AUX}/login`, { email: email, password: password }, httpOptions)
         //   .do(user => this.user = user);


        // let headers = new HttpHeaders();
        // headers = headers.set('Content-Type', 'application/x-www-form-urlencoded')
        // let params = new HttpParams().set('user', JSON.stringify({email: email,password:password}));
        // let body = ""
        // return this.http.post<User>(`${MEAT_API_AUX}/login`,
        // body,{headers: headers,params:params})
        //     .do(user => this.user = user);
    }//
}
