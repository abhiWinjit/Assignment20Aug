import { Component, OnInit } from '@angular/core';
import { UserdataService } from "../userdata.service";
import { Observable } from "rxjs";



  // var name1 = document.forms["RegForm"]["Name"];			 
	// var email = document.forms["RegForm"]["EMail"]; 
	// var phone = document.forms["RegForm"]["Telephone"]; 
	// var what = document.forms["RegForm"]["Subject"]; 
	// var password = document.forms["RegForm"]["Password"]; 
	// var address = document.forms["RegForm"]["Address"]; 
	// var storedUsers = localStorage.getItem('users');
	// var parsedObject = JSON.parse(storedUsers);

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _demoservice: UserdataService) { }

  ngOnInit() {
  }

  createUser(){
    var firstName1 = (<HTMLInputElement>document.getElementById('firstName')).value;
    var lastName1 = (<HTMLInputElement>document.getElementById('lastName')).value;
    var phoneNumber1 = (<HTMLInputElement>document.getElementById('phoneNumber')).value;
    var email1 = (<HTMLInputElement>document.getElementById('email')).value;
    var password1 = (<HTMLInputElement>document.getElementById('password')).value;
   
    let tempUser  = {
      "firstName" : firstName1,
      "lastName" : lastName1,
      "phoneNumber" : phoneNumber1,
      "email" : email1,
      "password" : password1,
      "realEstateLicenceNumber" : "@testingDoneByAbhijeet",
      "stateOfLicence" : "CaliforniaThisIsDoneByAbhijeet",
      "roleType" : "COMPANY_ADMIN",
      "secondsOffset" : 18600
  }
  

    this._demoservice.createUser(tempUser).subscribe(
      data => {
          console.log("Data send successfully",data);
          
          return true;
      },
      error => {
        console.error("Error saving user data");
        return Observable.throw(error);
      }
    );
    
  }
  
//   var name1 = document.getElementById('name');
// var pw1 = document.getElementById('pw');
// var address = document.getElementById('address');
// var email = document.getElementById('email-id');
// var no = document.getElementById('no');
                
// mainfunc()								 
// { 
//   var name1 = document.getElementById('Name1');
// var pw1 = document.getElementById('pw');
// var address = document.getElementById('address');
// var email = document.getElementById('email-id');
// var no = document.getElementById('no');
// 	console.log("I am in mainfunc of Register")
// 	if (name1.innerHTML == "")								 
// 	{ 
// 		window.alert("Please enter your name."); 
// 		// name.focus(); 
// 		return false; 
// 	} 

// 	if (address.innerHTML == "")							 
// 	{ 
// 		window.alert("Please enter your address."); 
// 		// name.focus(); 
// 		return false; 
// 	} 
	
// 	if (email.innerHTML == "")								 
// 	{ 
// 		window.alert("Please enter a valid e-mail address."); 
// 		// email.focus(); 
// 		return false; 
// 	} 

// 	if (email.innerHTML.indexOf("@", 0) < 0)				 
// 	{ 
// 		window.alert("Please enter a valid e-mail address."); 
// 		// email.focus(); 
// 		return false; 
// 	} 

// 	if (email.innerHTML.indexOf(".", 0) < 0)				 
// 	{ 
// 		window.alert("Please enter a valid e-mail address."); 
// 		email.focus(); 
// 		return false; 
// 	} 

// 	if (no.innerHTML == "")						 
// 	{ 
// 		window.alert("Please enter your telephone number."); 
// 		no.focus(); 
// 		return false; 
// 	} 

// 	if (pw1.innerHTML == "")					 
// 	{ 
// 		window.alert("Please enter your password"); 
// 		pw1.focus(); 
// 		return false; 
// 	} 
// 	if (email.innerHTML != "")
// 	{
// 		for (var i = 0; i < parsedObject.items.length; i++) {
// 			if (email.innerHTML == parsedObject.items[i].emailid) {
// 				window.alert("Email id already exists"); 
// 				email.focus(); 
// 				return false; 
// 			}
// 		}
// 	}
	
// 	console.log("Heyyy i reached here");
//     var users = JSON.parse(localStorage.getItem('users'));
//     if (users === null) {
//         users = {items:[]};
//     }
//     var user = {
//         emailid: email.innerHTML,
// 		password: pw1.innerHTML,
// 		name: name1.innerHTML,
// 		phone: no.innerHTML,
// 		address: address.innerHTML
//     };
//     users.items.push(user);
//     localStorage.setItem("users", JSON.stringify(users));
//     alert("The data is saved for  " + name1.innerHTML);
// 	return true; 
// }

}
