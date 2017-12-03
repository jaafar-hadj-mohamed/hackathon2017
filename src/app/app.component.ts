import { Component,OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
user: Observable<firebase.User>;
items: FirebaseListObservable<any[]>;
msgVal: string = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
       this.items = this.af.list('/messages', ref => 
      ref.limitToLast(50)
    );
    this.user = this.afAuth.authState;
  }
  OnInit(){

  }
  login() {
    this.afAuth.auth.signInAnonymously();
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  Send(desc: string) {
  console.log(desc);
    this.items.push({ message: desc});
    this.msgVal = '';
  } 
}
