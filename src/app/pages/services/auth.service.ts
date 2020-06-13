import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {SAuthResponse, User} from '../interface';
import {Observable, Subject, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class AuthService {
  public error$: Subject<string> = new Subject<string>();
constructor(private  http: HttpClient) {}
  get token(): string {
  const expDate = new Date(localStorage.getItem('b-token-exp'));
    if (new  Date() > expDate) {
      this.logout();
      return null;
    }
   return localStorage.getItem('b-token');
  }
  login(user: User): Observable<any> {
  user.rememberMe = true;
    return this.http.post(`https://vda-university.herokuapp.com/api/authenticate`, user).pipe(
    tap(this.setToken),
      catchError(this.handleError.bind(this)),
  );
  }
  logout() {
  this.setToken(null);
  }
  isAuthenticated(): boolean {
  return !!this.token;
  }
  private handleError(error: HttpErrorResponse) {
  const {message1} = error.error.detail;
  if (error.error.detail = 'Неверные учетные данные пользователя') {
    this.error$.next('Неверный логин или пароль');
  } else {
    this.error$.next('Успешно');
  }
   return throwError(error);
  }
  private setToken(response: SAuthResponse | null ) {
  if (response) {
    const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
    localStorage.setItem('fb-token', response.idToken),
      localStorage.setItem('fb-token-exp', expDate.toString());
  } else {
    localStorage.clear();
  }
  }
}
