import { Component, OnInit } from '@angular/core';
import { Blog } from '../model/blog.model';
import { BlogService } from '../services/blogservice.service';

@Component({
  selector: 'app-admin-view-post',
  templateUrl: './admin-view-post.component.html',
  styleUrls: ['./admin-view-post.component.css']
})
export class AdminViewPostComponent implements OnInit {

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
