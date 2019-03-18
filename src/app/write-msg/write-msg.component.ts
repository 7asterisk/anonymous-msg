import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-write-msg',
  templateUrl: './write-msg.component.html',
  styleUrls: ['./write-msg.component.css']
})
export class WriteMsgComponent implements OnInit {

  show = true;
  succes = false;
  private itemsCollection: AngularFirestoreCollection<any>;
  msg = {
    // uid: '',
    msg: ''
  };
  id: string;
  constructor(private afs: AngularFirestore, private route: ActivatedRoute) {
  }
  share(msg) {
    if (msg.length > 0) {
      this.itemsCollection = this.afs.collection<any>(this.id);
      this.msg.msg = msg;
      this.itemsCollection.valueChanges();
      this.addmsg(this.msg);
      this.show = false;
      this.succes = true;
    }
  }
  ngOnInit() {
    this.getid();
  }
  getid() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  addmsg(msg) {
    this.itemsCollection.add(msg);
  }
}
