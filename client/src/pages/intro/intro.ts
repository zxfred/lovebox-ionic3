import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewOrNotPage } from "../new-or-not/new-or-not";
import { IntroSlideService } from "./intro.service"

@IonicPage()
@Component({
	selector: 'page-intro',
	templateUrl: 'intro.html',
})
export class IntroPage implements OnInit {

	constructor (
		public navCtrl: NavController,
		public navParams: NavParams,
		private IntroSlideService: IntroSlideService
	){

	}

	// Data
	slides; // slides of intro page
	mockSlides = [
		{
			"title": "Treasure your love moments",
			"subtitle": "Easily edit and store your love messages in a digital love box.",
			"imgSrc": "/assets/img/intro1.png",
		},
		{
			"title": "Know more about him/her",
			"subtitle": "Each message should be “locked” with a question and the question need to be answered before reading the message.",
			"imgSrc": "/assets/img/intro2.png",
		}
	]

	// life circle methodes
	ngOnInit() {
		this.getSlides()
	}

	// add button and skip to the last slide
	addStartBtn(arr):void {
		arr[arr.length - 1].isShowBtn = true
	}

	ionViewDidLoad() {
		// console.log('ionViewDidLoad IntroPage');
	}

	getSlides(): void {
		this.IntroSlideService.getSlides()
			.subscribe(slides => {
				if (slides.length === 0) {
					// no slides got
					// this.navCtrl.setRoot(NewOrNotPage)
					this.slides = this.mockSlides
				} else {
					this.slides = slides
				}
				this.addStartBtn(this.slides)
			});
	}

}
