import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any>;
  users: any[];
  flag = 0;
  user = {
    uid: '986',
  };

  private itemDoc: AngularFirestoreDocument;
  item: Observable<any>;

  constructor(private afs: AngularFirestore) {

    this.itemDoc = afs.doc('user/OuFRnU4GjkJaCPSHRSbu');
    this.item = this.itemDoc.valueChanges();



    this.itemsCollection = afs.collection<any>('msg');
    this.itemsCollection.valueChanges()
      .subscribe(
        users => {
          this.users = users;
          users.forEach(user => {
            if (user.uid === '986') {
              this.flag = 1;
            }
          });
          if (!this.flag) {
            this.addItem(this.user);
            console.log('cool');
          }
        }
      );
  }
  addItem(user) {
    this.itemsCollection.add(user);
  }
  ngOnInit() {
  }

}
