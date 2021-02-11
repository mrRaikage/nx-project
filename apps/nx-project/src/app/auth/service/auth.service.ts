import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IUserData } from '../interfaces/user-data.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenStoreKey = 'token';

  constructor() { }

  login(object: {}): Observable<IUserData> {
    return of({token: 'sdgdfhfg561fghgf13jn1gh35', name: 'John Wick', success: true });
  }

  logout(token: string): Observable<any> {
    return of({success: false})
  }

  setToken(token): void {
    localStorage.setItem(this.tokenStoreKey, token);
  }

  getToken(): string {
    return localStorage.getItem(this.tokenStoreKey);
  }

  hasToken(): boolean {
    return !!this.getToken();
  }
}
