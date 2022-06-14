import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projekt-post',
  templateUrl: './projekt-post.component.html',
  styleUrls: ['./projekt-post.component.scss']
})
export class ProjektPostComponent implements OnInit {
  id!: string;
  singlePost: any;
  errorMessage: any;
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    console.log(this.id);

    this.getSinglePost();
  }
  getSinglePost() {
    this.spinner.show();
    this.blogService.getSinglePost(this.id).subscribe(
      (data) => {
        // Try to run this code
        this.singlePost = data;
        console.log(this.singlePost);
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
