import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-experiences",
  templateUrl: "./experiences.component.html",
  styleUrls: ["./experiences.component.scss"],
})
export class ExperiencesComponent implements OnInit {
  cars = [
    {
      img:
        "../../../assets/img/Certificates_image/Screenshot 2020-09-01 at 8.30.00 PM.png",
    },
    {
      img:
        "../../../assets/img/Certificates_image/Screenshot 2020-09-01 at 8.30.38 PM.png",
    },
    {
      img:
        "../../../assets/img/Certificates_image/Screenshot 2020-09-01 at 8.31.32 PM.png",
    },
    {
      img:
        "../../../assets/img/Certificates_image/Screenshot 2020-09-01 at 8.31.50 PM.png",
    },
    {
      img:
        "../../../assets/img/Certificates_image/Screenshot 2020-09-01 at 8.32.08 PM.png",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
