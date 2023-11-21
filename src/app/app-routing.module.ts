import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddBlogComponent } from './admin-add-blog/admin-add-blog.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminViewPostComponent } from './admin-view-post/admin-view-post.component';
import { AdminViewByIdComponent } from './admin-view-by-id/admin-view-by-id.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserPostByIdComponent } from './user-post-by-id/user-post-by-id.component';
import { WeatherShowComponent } from './weather-show/weather-show.component';
import { UserViewBlogsComponent } from './user-view-blogs/user-view-blogs.component';
const routes: Routes = [
  
  {path:'', component: FrontpageComponent},
  {path:'login', component: AdminLoginComponent},
  {path:'view-blogs', component: AdminViewPostComponent},
  {path: 'admin/posts/:id', component: AdminViewByIdComponent},
  {path:'admin/addblog', component: AdminAddBlogComponent},
  {path:'admin/dashboard', component: AdminDashboardComponent},
  {path:'user/posts/:id', component:UserPostByIdComponent},
  {path:'weather', component: WeatherShowComponent},
  {path:'blogs', component: UserViewBlogsComponent},
  // Add more routes if needed
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
