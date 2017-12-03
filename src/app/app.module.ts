import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';


export const firebaseConfig = {
  apiKey: "AIzaSyDX-hB_o7kN_L5MIW3ady0mE9TKQ1kIYZQ",
  authDomain: "hackathon2017-5fee8.firebaseapp.com",
  databaseURL: "https://hackathon2017-5fee8.firebaseio.com",
  storageBucket: "hackathon2017-5fee8.appspot.com",
  messagingSenderId: "137632251337"
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
