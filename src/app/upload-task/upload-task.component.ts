import { Component, OnInit, Input, ChangeDetectorRef } from "@angular/core";
import {
  AngularFireStorage,
  AngularFireUploadTask
} from "@angular/fire/storage";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { finalize, tap } from "rxjs/operators";

@Component({
  selector: "upload-task",
  templateUrl: "./upload-task.component.html",
  styleUrls: ["./upload-task.component.scss"]
})
export class UploadTaskComponent implements OnInit {
  @Input() file: File;

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore
  ) {}

  ngOnInit() {
    this.startUpload();
  }

  startUpload() {
    // The storage path
    const path = `stills/${Date.now()}_${this.file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          ref.getDownloadURL().subscribe(
            url => {
              this.downloadURL = url;
            },
            err => {
              console.log(err);
            },
            () => {
              const id = this.file.name + "_" + Date.now();

              this.db
                .collection("stills")
                .doc(id)
                .set({
                  id: id,
                  downloadURL: this.downloadURL,
                  path
                });
            }
          );
        })
      )
      .subscribe();
  }

  isActive(snapshot) {
    return (
      snapshot.state === "running" &&
      snapshot.bytesTransferred < snapshot.totalBytes
    );
  }
}
