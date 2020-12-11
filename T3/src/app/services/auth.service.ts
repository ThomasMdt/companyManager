import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { User } from '../store/user.store';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loginStatus : boolean;;

  constructor(private userstrore: User) {}

  login(details) : boolean {
    /*
     * Я понимаю, что так ни в коем случае нельзя делать, но у меня нет сервера
     * Так что это всего лишь имитация запроса на аутентификацию
     * Это очень очень грубое решение
     */
    let role : string | null;
    if (details.username === 'admin' && details.password === '12345') {
        this.userstrore.role = 'admin';
        this.loginStatus = true;
    } else if (details.username === 'user' && details.password === 'password') {
        this.userstrore.role = 'user';
        this.loginStatus = true;
    } else {
        this.userstrore.role = null;
        this.userstrore.role = null;
        this.loginStatus = false;
    }

    
    return this.loginStatus;
  }

  

  logout() {
    this.loginStatus = false;
  }
  isLogin() : boolean {
    //здесь должен быть запрос на сервер
    return this.loginStatus;
  }
}