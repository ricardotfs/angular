import { CanLoad, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { LoginService } from "app/security/login/login.service";


@Injectable()
export class LoggedinGuard implements CanLoad{
    
    constructor(private loginService:LoginService ){

    }

    checkAuthentication(path:string):boolean{
        const loggedIn = this.loginService.isLoggedIn();
        
        if(!loggedIn){
            this.loginService.handleLogin(`/${path}`)
        }
        return loggedIn;
    }

    canLoad(route: Route): boolean  {
        const loggedIn = this.loginService.isLoggedIn();
        
        if(!loggedIn){
            this.loginService.handleLogin(`/${route.path}`)
        }
        return loggedIn;   
    }

    canActivate(activatedRouter: ActivatedRouteSnapshot,routerState: RouterStateSnapshot):boolean{
        console.log('canActivate')
        return this.checkAuthentication(activatedRouter.routeConfig.path)
    }

}