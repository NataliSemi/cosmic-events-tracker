import { Component, HostListener, OnInit, AfterViewInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

import { NasaService } from '../../services/nasa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit, AfterViewInit {
  @ViewChild('spaceship', { static: false }) spaceshipRef?: ElementRef;
  events!: any[];

  constructor(
    private nasaService: NasaService,
    private router: Router,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    this.getNasaEvents(); // Call the method to fetch NASA events
  }
  
  ngOnInit(): void {
    // Initialize component
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
        this.positionSpaceship(); // Call the method to position the spaceship
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }

  positionSpaceship(): void {
    setTimeout(() => {
      const spaceship = this.spaceshipRef?.nativeElement as HTMLElement;
      if (spaceship) {
        const displayWidth = window.innerWidth;
        const displayHeight = window.innerHeight;

        const getRandomPosition = () => {
          const x = Math.random() * (displayWidth - spaceship.offsetWidth);
          const y = Math.random() * (displayHeight - spaceship.offsetHeight);
          this.renderer.setStyle(spaceship, 'left', x + 'px');
          this.renderer.setStyle(spaceship, 'top', y + 'px');
        };

        getRandomPosition();
        setInterval(getRandomPosition, 3000); // Change the interval value as desired
      }
    }, 100);
  }

  goToEventDetails(eventId: string): void {
    this.router.navigate(['/events', eventId]);
  }
}
