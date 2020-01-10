import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UserModel } from 'src/app/models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
  ) {}

  private userSignUp = 'https://jsonplaceholder.typicode.com/users';

  registerUser(userData: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.userSignUp, userData);
  }

}
