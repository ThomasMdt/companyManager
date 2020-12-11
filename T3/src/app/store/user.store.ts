import {Injectable} from '@angular/core';
import {observable} from 'mobx';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn : 'root'})
export class User {
    private _username: string | null;
    public get username(): string | null {
        return this._username;
    }
    public set username(value: string | null) {
        this._username = value;
    }
    private _role: string | null;
    public get role(): string | null {
        return this._role;
    }
    public set role(value: string | null) {
        this._role = value;
    }
    
}