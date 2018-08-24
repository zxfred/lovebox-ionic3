import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// angular module
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';

// page module
import { IntroPageModule } from '../pages/intro/intro.module';
import { WelcomePageModule } from "../pages/welcome/welcome.module";
import { LogInPageModule } from "../pages/log-in/log-in.module";
import { SignUpPageModule } from "../pages/sign-up/sign-up.module";
import { FillEmailPageModule } from "../pages/fill-email/fill-email.module";
import { SendEmailPageModule } from "../pages/send-email/send-email.module";
import { RegisterProfilePageModule } from "../pages/register-profile/register-profile.module";
import { EditProfilePageModule } from "../pages/edit-profile/edit-profile.module";
import { SetQuestionPageModule } from "../pages/set-question/set-question.module";
import { AnswerQuestionPageModule } from "../pages/answer-question/answer-question.module";
import { HomePageModule } from '../pages/home/home.module';
import { AboutPageModule } from '../pages/about/about.module';
import { MsgContentPageModule } from "../pages/msg-content/msg-content.module";
import { UserPageModule } from "../pages/user/user.module";

// ionic-native
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from "@ionic-native/camera";
import { InAppBrowser } from '@ionic-native/in-app-browser';

// provider
import { CameraProvider } from "../providers/util/camera.provider";

// Service
import { ToastService } from "../providers/util/toast.service";
import { UserRegisterService } from "../pages/sign-up/sign-up.service";
import { UserLoginService } from "../pages/log-in/log-in.service";
import { SetQuestionService } from "../pages/set-question/set-question.service";
import { HomeService } from "../pages/home/home.service";

@NgModule({
	declarations: [
		MyApp,
	],
	imports: [
		IonicModule.forRoot(MyApp),
		BrowserModule,
		HttpModule,
		HttpClientModule,

		IntroPageModule,
		AboutPageModule,
		HomePageModule,
		WelcomePageModule,
		LogInPageModule,
		SignUpPageModule,
		FillEmailPageModule,
		SendEmailPageModule,
		RegisterProfilePageModule,
		UserPageModule,
		EditProfilePageModule,
		AnswerQuestionPageModule,
		MsgContentPageModule,
		SetQuestionPageModule,
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
	],
	providers: [
		StatusBar,
		SplashScreen,
		CameraProvider,
		Camera,
		ToastService,
		InAppBrowser,
		UserRegisterService,
		UserLoginService,
		SetQuestionService,
		HomeService,
		{
			provide: ErrorHandler,
			useClass: IonicErrorHandler
		}
	]
})
export class AppModule {}

