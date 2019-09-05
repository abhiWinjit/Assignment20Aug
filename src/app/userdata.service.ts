import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  create_user(user){
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    let body = user;
    return this.http.post('https://staging.cloz.io:6003/addUser', body, options).pipe(map((res:Response)=>res.json()));
  }

  user_login(credetials){
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    let body =credetials;
    return this.http.post('https://staging.cloz.io:6003/login', body, options).pipe(map((res:Response)=>res.json()));
  }

  forgot_password(email){
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    let body = email;
    return this.http.post('https://staging.cloz.io:6003/requestForgotPassword',body,options).pipe(map((res:Response)=>res.json()));
  }

  constructor(private http:Http) { }
}
// https://staging.cloz.io:6003
//http://192.168.9.68:6003