import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projekt-post',
  templateUrl: './projekt-post.component.html',
  styleUrls: ['./projekt-post.component.scss']
})
export class ProjektPostComponent implements OnInit {
  posts: any;
  constructor(public http: HttpClient) {

   //Rest API Calling
    this.http.get('https://admin.habermann-j.de/wp-json/wp/v2/posts/').subscribe(data => {
      this.posts = data;
      console.log(this.posts);

    });
  }
  ngOnInit() {
  }
}
