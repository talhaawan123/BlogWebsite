import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../model/blog.model';
import { addblogrequest } from '../model/add-blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http : HttpClient){

  }

  private apiUrl='https://localhost:7254/api/Posts/';
  getAllPosts(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.apiUrl}`);
  }

  getpostbyid( id: string): Observable<Blog[]> {
    return this.http.get <Blog[]>(this.apiUrl + id);
  }

  
  addBlog(post: addblogrequest): Observable<any> {
    return this.http.post(`${this.apiUrl}`, post);
  }
 deleteBlog(id: string): Observable<any> {
    return this.http.delete(this.apiUrl + id);
  }
  
}
