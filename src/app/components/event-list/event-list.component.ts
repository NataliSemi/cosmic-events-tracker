import { Component, HostListener, OnInit } from '@angular/core';
import { NasaService } from '../../services/nasa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events!: any[];

  constructor(private nasaService: NasaService, private router: Router) {}

  ngOnInit(): void {
    this.getNasaEvents();
  }

  @HostListener('window:wheel', ['$event'])
  onWindowScroll(event: Event): void {
    // Handle the scroll event here
    // You can access the scroll position using `window.scrollY`
    // Example:
    if (window.scrollY > 500) {
      // Perform some action when the user scrolls beyond a certain point
    }
  }
  getNasaEvents(): void {
    this.nasaService.getNasaEvents().subscribe(
      (response) => {
        this.events = response.events;
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }

  goToEventDetails(eventId: string): void {
    this.router.navigate(['/events', eventId]);
  }
}
