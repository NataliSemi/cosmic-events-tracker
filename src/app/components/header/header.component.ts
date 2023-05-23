import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMobileNavbarVisible = false;

  toggleMobileNavbar(): void {
    this.isMobileNavbarVisible = !this.isMobileNavbarVisible;
  }

  closeMobileNavbar(): void {
    this.isMobileNavbarVisible = false;
  }

}
