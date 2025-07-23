import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http: HttpClient) {

   }

   createUser(user: User): Observable<any>{
      return this.http.post('https://api.freeprojectapi.com/api/UserApp/CreateNewUser', user);
   }
}
