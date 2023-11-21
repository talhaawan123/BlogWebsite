import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NavbarComponent } from './navbar/navbar.component';
import { CorouselComponent } from './corousel/corousel.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminViewPostComponent } from './admin-view-post/admin-view-post.component';
import { AdminViewByIdComponent } from './admin-view-by-id/admin-view-by-id.component';
import { AdminAddBlogComponent } from './admin-add-blog/admin-add-blog.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';

import { WeatherShowComponent } from './weather-show/weather-show.component';
import { UserViewBlogsComponent } from './user-view-blogs/user-view-blogs.component';
import { UserPostByIdComponent } from './user-post-by-id/user-post-by-id.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CorouselComponent,
    FrontpageComponent,
    AdminLoginComponent,
    AdminViewPostComponent,
    AdminViewByIdComponent,
    AdminAddBlogComponent,
    AdminDashboardComponent,
    MainNavbarComponent,
    
    WeatherShowComponent,
         UserViewBlogsComponent,
         UserPostByIdComponent,
         FooterComponent,
  
    

    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
