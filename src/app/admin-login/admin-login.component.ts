import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  password: string = '';
  constructor(private router : Router){}

  checkPassword() {
    if (this.password === 'password') {
      alert('Login success!');
      this.router.navigate(['/admin/dashboard']);
    } else {
      alert('Incorrect password. Try again.');
    }
  }
}
