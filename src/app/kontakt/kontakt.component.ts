import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

declare let Email: any;

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent implements OnInit {

  constructor() {}

  ngOnInit(): void { }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_ebs0kzs', 'template_kc736lz', e.target as HTMLFormElement, 'user_7JmFWIo3hl8vVMU6YOOld')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }


}

