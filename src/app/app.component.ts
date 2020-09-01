import { Component, OnInit } from "@angular/core";
import { Route } from "@angular/compiler/src/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "vishal-portfolio";

  constructor(private router: Router) {}
  ngOnInit() {
    this.router.navigate(["/home"]);
  }
}
