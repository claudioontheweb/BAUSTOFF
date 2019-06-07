import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { merge, of as observableOf } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { Router } from "@angular/router";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { auth } from "firebase";
import { User } from "../_models/User";

@Injectable({
  providedIn: "root"
})
export class UserService {
  user$: Observable<User>;

  showSpinner: boolean = true;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          this.showSpinner = false;
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return observableOf(null);
        }
      })
    );
  }

  async login() {
    this.showSpinner = true;
    const provider = new auth.GoogleAuthProvider();
    this.afAuth.auth
      .signInWithPopup(provider)
      .then(credential => {
        this.updateUserData(credential.user);
      })
      .then(event => {
        this.showSpinner = false;
        this.router.navigate(["/profile"]);
      });
  }

  async logOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(["/"]);
  }

  updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return userRef.set(data, { merge: true });
  }
}
