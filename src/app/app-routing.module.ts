import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ExperiencesComponent } from "./components/experiences/experiences.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "experiences", component: ExperiencesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
