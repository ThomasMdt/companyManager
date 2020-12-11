import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import { AuthService } from './services/auth.service';
import { User } from './store/user.store';
@Injectable() 
export class AppGuard implements CanActivate {
    constructor(private authService : AuthService) {};
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
        return true; 
        //return this.authService.isLogin();
        
    }
}
@Injectable() 
export class EditGuard implements CanActivate {
    constructor(private userStore : User) {};
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
         return (this.userStore.role === 'admin' ? true : false);
        
    }
}