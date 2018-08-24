import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogInPage } from "../log-in/log-in";
import { SignUpPage } from "../sign-up/sign-up";

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  toLogInPage() {
      this.navCtrl.push(LogInPage);
  }

  toSignUpPage() {
      this.navCtrl.push(SignUpPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad welcomePage');
  }

}
