import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  panelOpenState = true;
  private ngNavigatorShareService: NgNavigatorShareService;
  private itemsCollection: AngularFirestoreCollection<any>;
  msgs: Observable<any[]>;

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore, ngNavigatorShareService: NgNavigatorShareService) {
    afAuth.user.subscribe(user => {
      if (user) {
        // console.log('i m in' + user.uid);
        this.itemsCollection = afs.collection(user.uid);
        this.msgs = this.itemsCollection.valueChanges();
      }
    }
    );
    this.ngNavigatorShareService = ngNavigatorShareService;
  }

  async shareme(name, uid) {
    try {
      const sharedResponse = await this.ngNavigatorShareService.share({
        title: '`secret msg' ,
        text: 'send ' + name + ' a secret msg.',
        url: 'https://secretmsg.hexadigi.com/write-msg/' + uid
      });
      console.log(sharedResponse);
    } catch (error) {
      console.log('You app is not shared, reason: ', error);
    }
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  ngOnInit() {
  }

}
