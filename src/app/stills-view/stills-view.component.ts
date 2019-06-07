import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-stills-view",
  templateUrl: "./stills-view.component.html",
  styleUrls: ["./stills-view.component.scss"]
})
export class StillsViewComponent implements OnInit {
  imgID: string;
  imageUrl: string;

  constructor(route: ActivatedRoute, private afs: AngularFirestore) {
    this.imgID = route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.getImage();
  }

  getImage() {
    this.afs
      .collection("stills")
      .doc(this.imgID)
      .get()
      .subscribe(doc => {
        if (doc.exists) {
          this.imageUrl = doc.data().downloadURL;
        } else {
          console.log("No such document!");
        }
      });
  }
}
