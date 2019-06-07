import { Component, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import { NgxSmartModalService } from "ngx-smart-modal";
import { DataService } from "../_services/data.service";
import { Observable } from "rxjs";
import {
  AngularFirestoreCollection,
  AngularFirestore
} from "@angular/fire/firestore";
import { Router } from "@angular/router";

@Component({
  selector: "app-stills",
  templateUrl: "./stills.component.html",
  styleUrls: ["./stills.component.scss"]
})
export class StillsComponent implements OnInit {
  private stillsCollection: AngularFirestoreCollection<any>;
  stills: Observable<any>;

  constructor(
    public userService: UserService,
    public afs: AngularFirestore,
    private router: Router
  ) {}

  ngOnInit() {
    this.stillsCollection = this.afs.collection<any>("stills");
    this.stills = this.stillsCollection.valueChanges();
  }
}
