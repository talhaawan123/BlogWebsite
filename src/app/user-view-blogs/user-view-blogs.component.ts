import { Component , OnInit } from '@angular/core';
import { BlogService } from '../services/blogservice.service';
import { Blog } from '../model/blog.model';

@Component({
  selector: 'app-user-view-blogs',
  templateUrl: './user-view-blogs.component.html',
  styleUrls: ['./user-view-blogs.component.css']
})
export class UserViewBlogsComponent implements OnInit {

  posts : Blog[]=[];
  constructor(private blogservice : BlogService){}
  ngOnInit():void {
    this.blogservice.getAllPosts().subscribe(
      response=>{
         this.posts= response;
      }
    )
  }
}
