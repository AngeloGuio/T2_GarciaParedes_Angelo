import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Caso1Component } from './dashboard/caso-1/caso-1.component';
import { Caso2Component } from './dashboard/caso-2/caso-2.component';
import { Caso3Component } from './dashboard/caso-3/caso-3.component';


export const routes: Routes = [
    {path: "login", component: LoginComponent},
   {path: "dashboard", component: DashboardComponent,
    
        children: [
            {path: "home", component: HomeComponent},
            {path: "caso-1", component: Caso1Component},
            {path: "caso-2", component: Caso2Component},
            {path: "caso-3", component: Caso3Component}, 
        ]
   },
   {path: "", redirectTo: "login", pathMatch: "full"},
   {path: "**", component: PageNotFoundComponent}
   
];
