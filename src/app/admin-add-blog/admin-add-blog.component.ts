import { Component } from '@angular/core';
import { BlogService } from '../services/blogservice.service';
import { addblogrequest } from '../model/add-blog.model';

@Component({
  selector: 'app-admin-add-blog',
  templateUrl: './admin-add-blog.component.html',
  styleUrls: ['./admin-add-blog.component.css']
})
export class AdminAddBlogComponent {
  constructor( private blogservice : BlogService){}
  post: addblogrequest = {
    title: '',
    content: '',
    summary: '',
    urlhandle: '',
    featuredimageurl: '',
    visible: true,
    author: '',
    publishDate: '',
    updatedDate: '',
  };
  resetForm() {
    this.post = {
      title: '',
      content: '',
      summary: '',
      urlhandle: '',
      featuredimageurl: '',
      visible: true,
      author: '',
      publishDate: '',
      updatedDate: '',
    };
  }
    addBlog() {
      this.blogservice.addBlog(this.post).subscribe(() => {
        console.log('Blog added successfully!');
        this.resetForm();
      });
    }
}
