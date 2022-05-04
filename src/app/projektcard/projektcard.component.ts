import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projektcard',
  templateUrl: './projektcard.component.html',
  styleUrls: ['./projektcard.component.scss']
})
export class ProjektcardComponent implements OnInit {
  isToggle: any;

  card = [
    {
      title: 'Portfolio Webseite',
      text: 'Mein Portfolio Webseite erst in HTML, CSS und in Bootstrap. Und jetzt in Angular.',
      text2: 'lorem ipson',
      textcolor: 'text-white',
      buttonlink: 'https://github.com/HanibalEckzahn/Angular-Portfolio',
      img: '../../assets/bilder/webseite-new.png',
      imgalt: 'website'
    }
  ]


  constructor() {

  }

  ngOnInit(): void {
  }

}
