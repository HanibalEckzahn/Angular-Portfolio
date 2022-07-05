import { Component, OnInit } from '@angular/core';

import {faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin , faGithub, faStackOverflow} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  fb = faFacebook;
  tw = faTwitter;
  insta = faInstagram;
  Yt= faYoutube;
  linkedin = faLinkedin;
  github = faGithub;
  overflow = faStackOverflow;
  constructor() { }

  ngOnInit(): void {
  }

}
