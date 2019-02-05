import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(name, user){
    // post these details to api server return user info if correct
    return this.http.post('/api/auth.php',{
      name,
      user
    }).subscribe(data =>{
      console.log(data, "is what we got from the server")
    })
  }
}
