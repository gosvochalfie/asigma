import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: any;
  password: any;
  userDetails:any={
    username:'',
    password:''
  }
  constructor(private router:Router){}
  signin() {
  if (this.username==='claire' && this.password==='Jesus') {
    this.router.navigateByUrl('/dashboard');
   console.log(`USERNAME: ${this.username}, PASSWORD: ${this.password}`) 
  } else {
    alert('WRONG PASSWORD');
  }
    }
    dashboard():void{
      this.router.navigateByUrl('/dashboard');
    }

}
