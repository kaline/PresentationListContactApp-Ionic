import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage {
  email: any;
  password: any;

  constructor(public http: HttpClient, public auth: AuthService) {
  }


  loginuser(){
    console.log('login');
     return this.auth.login(this.email, this.password).subscribe( (data: any) => {
       console.log('data', data);

       if(data.origin === '187.18.220.41') {
         console.log('usuario');
       }else {
         console.log('error');
       }
     }, error => {
       console.log(error);
     });
  }
}
