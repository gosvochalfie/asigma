import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
username: string='Alfred Ochola';

  constructor(private router:Router){}
  logout():void{
Swal.fire({
title:'Logout?',
showCancelButton:true,
showConfirmButton:true,
confirmButtonText:'Logout',
confirmButtonColor:'red'
}).then((result)=>{
if(result.isConfirmed){
  this.router.navigateByUrl('/login');
}
})
  }
}
