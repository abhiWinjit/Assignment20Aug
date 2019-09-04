import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/userdata.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private _forgotService: UserdataService ) { }

  ngOnInit() {
  }

  user_forgot_password(){
      var email1 = (<HTMLInputElement>document.getElementById('email-id')).value;
     
      let tempUser  = {
        "email" : email1
    }
    
  
      this._forgotService.forgot_password(tempUser).subscribe(
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
