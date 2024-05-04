import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss']
})
export class NavigationbarComponent {
  constructor(private router: Router) { }
  //navigate to dashboard
  navigateToDashboard() {
    console.log("Navigating to dashboard");
    this.router.navigateByUrl('/dashboard');
  }
  //navigate to coffee page
  navigateToCoffeePage() {
    console.log("Navigating to coffee page");
    this.router.navigateByUrl('/coffee-page');
  }
}
