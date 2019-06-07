import { Component, OnInit, Input, HostListener } from "@angular/core";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  @Input() active: string;

  isMobile = false;
  mobileMenu = false;

  constructor(public breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(["(min-width: 700px)"])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isMobile = false;
        } else {
          this.isMobile = true;
        }
      });
  }

  toggleMenu() {
    this.mobileMenu = !this.mobileMenu;
  }

  ngOnInit() {
    /* document.getElementById(this.active).style.color = "#c29292"; */
  }
}
