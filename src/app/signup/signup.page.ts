import { Component, OnInit } from '@angular/core';
import {  AlertController } from '@ionic/angular';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  user = {
  name: '',
  email: '',
  password: '',
  password1: ''
};

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
     // cssClass: 'my-custom-class',
     // header: 'Alert',
     // subHeader: 'Subtitle',
     // message: 'This is an alert message.',
     // buttons: ['OK']
    });

  //  await alert.present();

   // const { role } = await alert.onDidDismiss();
   // console.log('onDidDismiss resolved with role', role);
  }

}
