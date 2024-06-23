import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router, 
    private route: ActivatedRoute,
    private authService: AuthService
    
  ){

  }

  salir(): void{
    this.authService.logout();
    this.router.navigateByUrl("/login")
    
  }


  irHome():void{
    this.router.navigate(["home"], {relativeTo: this.route})
  }
  irCaso1():void{
    this.router.navigate(["caso-1"], {relativeTo: this.route})
  }
  irCaso2():void{
    this.router.navigate(["caso-2"], {relativeTo: this.route})
  }
  irCaso3():void{
    this.router.navigate(["caso-3"], {relativeTo: this.route})
  }
}
