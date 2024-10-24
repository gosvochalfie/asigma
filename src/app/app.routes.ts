import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FarmersComponent } from './farmers/farmers.component';
import { NewfarmerComponent } from './newfarmer/newfarmer.component';

export const routes: Routes = [
  
   
     {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'',component:LayoutComponent,
        children:[
            {path:'dashboard',component:DashboardComponent,title:'Dashboard'},
            {path:'farmers',component:FarmersComponent},
            {path:'newfarmer',component:NewfarmerComponent,title:'New Farmer'}

        ]
    }

];
