import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from "../Entity/user";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {NgForm} from "@angular/forms";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiurl = 'api/users';
  constructor(private http:HttpClient,
    private router: Router) { }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
       
        // TODO: send the error to remote logging infrastructure
        console.log(error); // log to console instead
   
        // TODO: better job of transforming  error for user consumption
        console.log(`${operation} failed: ${error.message}`);
   
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
  
    signup(formData: NgForm) {
      return this.http.post<any>(  `${this.apiurl}/signup`, formData).pipe(
        tap(user => {
          console.log(user);
        }),
        catchError(this.handleError('getHeroes',[] ))
        
      );
    }
  
      login(formData: NgForm) {
        return this.http.post<any>(`${this.apiurl}/login`, formData).pipe(tap(user => {
          console.log(user);
        }),
        catchError(this.handleError('getHeroes',[]))
        );
      
    }
  logout() {
    localStorage.removeItem('currentUser');
    //this.isloggedIn = false;
    this.router.navigate(['/login']);
  }
  // isLogged() {
  //   return this.isloggedIn;
  // }
  }


