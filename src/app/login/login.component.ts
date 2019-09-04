import { Component, OnInit } from '@angular/core';
import { UserdataService } from "../userdata.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _loginservice: UserdataService) { }

  ngOnInit() {
  }

  userLogin(){
    var email1 = (<HTMLInputElement>document.getElementById('email-id')).value;
    var password1 = (<HTMLInputElement>document.getElementById('pw')).value;
   
    let tempUser  = {
      "email" : email1,
      "password" : password1
  }
  

    this._loginservice.user_login(tempUser).subscribe(
      response => {
          console.log("Data send successfully", response);
          console.log("Token",response.data.token);
          window.localStorage.setItem("token", response.data.token);
          return true;
      },
      error => {
        console.error("Error in login into system");
        return Observable.throw(error);
      }
    );
  }
}
