import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  cards = [
    {
      title: 'Portfolio Webseite',
      text: 'Mein Portfolio Webseite erst in HTML, CSS und in Bootstrap. Und jetzt in Angular.',
      textcolor: 'text-white',
      buttonlink: 'https://github.com/HanibalEckzahn/Angular-Portfolio',
      img: '../../assets/bilder/webseite-new.webp',
      imgalt: 'website'
    },
    {
      title: 'Kleinere Projekte',
      text: 'Kleine Projekte in Python siehe Github',
      textcolor: 'text-white',
      buttonlink: 'https://github.com/HanibalEckzahn',
      img: '../../assets/bilder/github-new.webp',
      imgalt: 'Github Logo'
    },
    {
      title: 'Roomba 630 Smart gemacht',
      text: 'Ich habe dem alten Roomba 630 einen ESP8266 verbaut um in in mein Smarthome einzubinden',
      textcolor: 'text-white',
      buttonlink: 'https://github.com/HanibalEckzahn/Roomba-630',
      img: '../../assets/bilder/roomba-new.webp',
      imgalt: 'staubsuager'
    }
  ];
//TODO bilder komprimieren (https://material.angular.io/cdk/layout/overview)

  constructor() { }

  ngOnInit(): void {
  }

}
