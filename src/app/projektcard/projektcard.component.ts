import { BlogService } from './../blog.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


//TODO Admin page erreichbar machen .htacces?

@Component({
  selector: 'app-projektcard',
  templateUrl: './projektcard.component.html',
  styleUrls: ['./projektcard.component.scss']
})
export class ProjektcardComponent implements OnInit {
  isToggle: any;

  id!: string;
  singlePost: any;
  errorMessage: any;


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


  constructor(
    private blogService: BlogService,
    private spinner: NgxSpinnerService){}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.spinner.show();

    this.blogService.getPost().subscribe(
      (data) => {
        this.getPosts = data;
        console.log(this.getPosts);
        this.spinner.hide();
      },
      (error) => {
        // if any error, Code throws the error
        this.errorMessage = error.error.message;
        console.log(error.error.message, 'error');
        this.spinner.hide();
      }
    );
  }

}
