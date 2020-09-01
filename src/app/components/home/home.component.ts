import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  responsiveOptions;
  constructor() {}
  cars = [
    {
      name: "Saquib Khan",
      message:
        "Pain can change you, but that doesn't mean it has to be a bad change. Take that pain and turn it into wisdom.Pain can change you, but that doesn't mean it has to be a bad change. Take that pain and turn it into wisdom",
      img: "../../../assets/img/saquib_Khan.jpg",
    },
    {
      name: "Prajakta Bharate",
      message:
        "Pain can change you, but that doesn't mean it has to be a bad change. Take that pain and turn it into wisdom.Pain can change you, but that doesn't mean it has to be a bad change. Take that pain and turn it into wisdom",
      img: "../../../assets/img/saquib_Khan.jpg",
    },
    {
      name: "Rohan Sharma",
      message:
        "Pain can change you, but that doesn't mean it has to be a bad change. Take that pain and turn it into wisdom.Pain can change you, but that doesn't mean it has to be a bad change. Take that pain and turn it into wisdom",
      img: "../../../assets/img/saquib_Khan.jpg",
    },
    {
      name: "Waqar Md",
      message:
        "Pain can change you, but that doesn't mean it has to be a bad change. Take that pain and turn it into wisdom.Pain can change you, but that doesn't mean it has to be a bad change. Take that pain and turn it into wisdom",
      img: "../../../assets/img/saquib_Khan.jpg",
    },
    {
      name: "Hussain ",
      message:
        "Pain can change you, but that doesn't mean it has to be a bad change. Take that pain and turn it into wisdom.Pain can change you, but that doesn't mean it has to be a bad change. Take that pain and turn it into wisdom",
      img: "../../../assets/img/saquib_Khan.jpg",
    },
  ];
  cars1 = [
    {
      name: "Saquib Khan",
      message:
        "Pain can change you, but that doesn't mean it has to be a bad change. Take that pain and turn it into wisdom.Pain can change you, but that doesn't mean it has to be a bad change. Take that pain and turn it into wisdom",
      img: "../../../assets/img/angular-material.png",
    },
    {
      name: "Prajakta Bharate",
      message:
        "Pain can change you, but that doesn't mean it has to be a bad change. Take that pain and turn it into wisdom.Pain can change you, but that doesn't mean it has to be a bad change. Take that pain and turn it into wisdom",
      img: "../../../assets/img/prime-ng.png",
    },
    {
      name: "Rohan Sharma",
      message:
        "Pain can change you, but that doesn't mean it has to be a bad change. Take that pain and turn it into wisdom.Pain can change you, but that doesn't mean it has to be a bad change. Take that pain and turn it into wisdom",
      img: "../../../assets/img/bootstrap-1.png",
    },
    {
      name: "Waqar Md",
      message:
        "Pain can change you, but that doesn't mean it has to be a bad change. Take that pain and turn it into wisdom.Pain can change you, but that doesn't mean it has to be a bad change. Take that pain and turn it into wisdom",
      img: "../../../assets/img/saquib_Khan.jpg",
    },
    {
      name: "Hussain ",
      message:
        "Pain can change you, but that doesn't mean it has to be a bad change. Take that pain and turn it into wisdom.Pain can change you, but that doesn't mean it has to be a bad change. Take that pain and turn it into wisdom",
      img: "../../../assets/img/saquib_Khan.jpg",
    },
  ];
  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: "1024px",
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: "768px",
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: "560px",
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
