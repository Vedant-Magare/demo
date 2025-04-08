import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css'],
})
export class HeaderNavComponent {
  constructor(private router: Router, private eRef: ElementRef) {}

  isSidebarActive: boolean = false;

  // Menu Items with Icons
  menuItems = [
    { name: 'Home', icon: 'bx bx-home', route: '' },
    { name: 'Projects', icon: 'bx bx-folder', route: '/projects' },
    { name: 'Messages', icon: 'bx bx-message', route: '/messages' },
    { name: 'About Us', icon: 'bx bx-info-circle', route: '/about-us' },
    { name: 'Contact Us', icon: 'bx bx-message-rounded-dots', route: '/contact-us' },
    { name: 'Registration', icon: 'bx bx-user-plus', route: '/register' },
    { name: 'Log-In', icon: 'bx bx-log-in', route: '/login' },
  ];

  searchQuery: string = '';
  filteredServices: any[] = [];

  services = [
    { title: 'Video Editing', route: '/video-editing' },
    { title: 'Graphic Design', route: '/graphic-design' },
    { title: 'UI/UX', route: '/ui-ux' },
    { title: 'Branding & Logo Design', route: '/branding-logo-Design' },
    { title: 'Print Design ', route: '/print-design' },
    { title: 'Social Media Design', route: '/social-media-design' },
  ];

  // Filter services based on user input
  filterServices() {
    this.filteredServices = this.services.filter((service) =>
      service.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Open the page when a user clicks a suggestion
  selectService(service: any) {
    this.searchQuery = service.title; // Fill the input with selected service
    this.filteredServices = []; // Hide suggestions
    this.router.navigate([service.route]); // Navigate to selected service page
  }

  // Handle Enter key for search
  navigateToService() {
    const service = this.services.find((s) =>
      s.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

    if (service) {
      this.router.navigate([service.route]); // Navigate to matched page
    }
  }

  // ✅ Hide search results when clicking outside
  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.filteredServices = [];
    }
  }

  toggleSidebar(): void {
    this.isSidebarActive = !this.isSidebarActive;

    // Get the overlay element
    const overlay = document.querySelector('.sidebar-overlay') as HTMLElement;
    if (this.isSidebarActive) {
      overlay.style.display = 'block';
    } else {
      overlay.style.display = 'none';
    }
  }
}

