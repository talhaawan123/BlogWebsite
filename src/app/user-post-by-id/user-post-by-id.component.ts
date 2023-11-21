import { Component } from '@angular/core';
import { Blog } from '../model/blog.model';
import { BlogService } from '../services/blogservice.service';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-post-by-id',
  templateUrl: './user-post-by-id.component.html',
  styleUrls: ['./user-post-by-id.component.css']
})
export class UserPostByIdComponent {
  constructor(private route: ActivatedRoute, private blogservice: BlogService) {}
  
  post: Blog | undefined;
  

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.blogservice.getpostbyid(id).subscribe(
          (response: Blog | Blog[]) => {
            if (Array.isArray(response)) {
              // If it's an array, take the first element
              this.post = response[0];
            } else {
              // If it's not an array, assign it directly
              this.post = response;
            }
          },
          error => {
            console.error('Error fetching post:', error);
          }
        );
      }
    });
  }
}
