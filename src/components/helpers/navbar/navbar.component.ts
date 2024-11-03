import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ CommonModule, ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  constructor(private router: Router) {}

  displayNavigation: boolean = false;

  ngOnInit(): void {
    this.setDisplayNavigation();
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }
  
  setDisplayNavigation() {
    if (localStorage.getItem("appAccountId")) {
      this.displayNavigation = true;
    } else {
      this.displayNavigation = false;
    }
  }
}
