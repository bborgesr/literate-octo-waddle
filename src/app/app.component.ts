import { Component } from "@angular/core";

// metadata
// this Angular built-in decorator is used to identify the class below as a component
@Component({
  selector: "pm-root", // custom html tag (pm = product management)
  templateUrl: "./app.component.html", // linked template, instead of inline
  styleUrls: ["./app.component.css"]
})

// class
export class AppComponent {
  // properties (data)
  pageTitle: string = "Acme Product Management";

  // methods (logic)
}
