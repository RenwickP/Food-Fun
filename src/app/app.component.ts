import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  loadedFeature = "recipe";

  title = "foodfun";
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
