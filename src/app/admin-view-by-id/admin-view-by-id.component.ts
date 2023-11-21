// import { Component , OnInit} from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { BlogService } from '../services/blogservice.service';
// import { Blog } from '../model/blog.model';

// @Component({
//   selector: 'app-admin-view-by-id',
//   templateUrl: './admin-view-by-id.component.html',
//   styleUrls: ['./admin-view-by-id.component.css']
// })
// export class AdminViewByIdComponent {

// constructor( private route : ActivatedRoute, private blogservice : BlogService){}
// post: Blog | undefined;
// ngOnInit( ):void {
//     this.route.paramMap.subscribe(
//     params=>{
//       const id = params.get('id');

//       if (id){
//                 this.blogservice.getpostbyid(id).subscribe(
//                   response=>{this.post= response}
                  
//                   )
//       }
//     }
//       )
// }

// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blogservice.service';
import { Blog } from '../model/blog.model';

@Component({
  selector: 'app-admin-view-by-id',
  templateUrl: './admin-view-by-id.component.html',
  styleUrls: ['./admin-view-by-id.component.css']
})
export class AdminViewByIdComponent implements OnInit {

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

  deletePost() {
    if (this.post && confirm('Are you sure you want to delete this post?')) {
      this.blogservice.deleteBlog(this.post.id).subscribe({
        next: () => {
          console.log('Post deleted successfully!');
        // Navigate back to the list of blogs
        },
        error: error => {
          console.error('Error deleting post:', error);
        }
      });
    }
  }
}

