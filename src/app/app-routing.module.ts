import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { StillsComponent } from "./stills/stills.component";
import { StillsViewComponent } from "./stills-view/stills-view.component";
import { ContactComponent } from "./contact/contact.component";
import { ProfileComponent } from "./profile/profile.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./auth.guard";
import { UploadComponent } from "./upload/upload.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  { path: "home", component: HomeComponent },
  { path: "stills", component: StillsComponent },
  {
    path: "stills/upload",
    component: UploadComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "stills/:id",
    component: StillsViewComponent,
    canActivate: [AuthGuard]
  },
  { path: "about", component: ContactComponent },
  { path: "profile", component: ProfileComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
