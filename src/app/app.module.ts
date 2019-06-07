import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { StillsComponent } from "./stills/stills.component";
import { UploadComponent } from "./upload/upload.component";
import { ContactComponent } from "./contact/contact.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { StillsViewComponent } from "./stills-view/stills-view.component";
import { NavComponent } from "./nav/nav.component";
import { ProfileComponent } from "./profile/profile.component";

// Angular Fire
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "src/environments/environment";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { NgxSmartModalModule } from "ngx-smart-modal";
import { FileDropDirective } from "./file-drop.directive";
import { UploadTaskComponent } from "./upload-task/upload-task.component";
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StillsComponent,
    UploadComponent,
    ProfileComponent,
    ContactComponent,
    PageNotFoundComponent,
    StillsViewComponent,
    NavComponent,
    LoadingSpinnerComponent,
    FileDropDirective,
    UploadTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    NgxSmartModalModule,
    LayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
