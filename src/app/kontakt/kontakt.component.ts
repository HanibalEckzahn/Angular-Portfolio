import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'


@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent  {

  

  public sendEmail(e: Event){
    e.preventDefault();
    console.log("EmailSend aufgerufen");
    emailjs.sendForm('service_mfunuhk', 'template_kc736lz', e.target as HTMLFormElement, 'user_7JmFWIo3hl8vVMU6YOOld').then((result: EmailJSResponseStatus) =>{
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  }
}

