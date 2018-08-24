import { Component } from '@angular/core';
import { WelcomePage } from "../../pages/welcome/welcome";
import { IonicPage, NavController } from 'ionic-angular';


@Component({
	selector: 'intro-header',
	templateUrl: './intro-header.component.html',
})
export class IntroHeaderComponent {

	constructor(
		public navCtrl: NavController,
	) {

	}

	clickSkip(): void {
		this.navCtrl.push(WelcomePage)
	}

}
