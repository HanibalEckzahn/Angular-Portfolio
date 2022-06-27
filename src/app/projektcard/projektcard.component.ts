import { BlogService } from './../blog.service';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-projektcard',
  templateUrl: './projektcard.component.html',
  styleUrls: ['./projektcard.component.scss']
})
export class ProjektcardComponent implements OnInit {
  isToggle: any;

  public datas:any = [];
  public test:any = [];

  id!: string;
  singlePost: any;
  errorMessage: any;

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  card = [
    {
      title: 'Portfolio Webseite',
      text: 'Mein Portfolio Webseite erst in HTML, CSS und in Bootstrap. Und jetzt in Angular.',
      text2: 'lorem ipson',
      textcolor: 'text-white',
      buttonlink: 'https://github.com/HanibalEckzahn/Angular-Portfolio',
      img: '../../assets/bilder/webseite-new.png',
      imgalt: 'website'
    },
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


  constructor(
    private api: BlogService){}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    return this.api.getPost().subscribe((data: {}) => {
      this.test = data;
      console.log(data);
      console.log(this.test['0']);
      this.test.pop();

      for (var i = 0; i < this.test.length; i++){
        var obj = this.test[i];
        console.log("In der For: ",this.test)
        this.datas.push(this.test)
        console.log(this.datas)
      }
    });
  }


}
