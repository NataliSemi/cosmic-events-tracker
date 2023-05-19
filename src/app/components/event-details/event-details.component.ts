import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NasaService } from '../../services/nasa.service';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event!: Event;

  constructor(private route: ActivatedRoute, private nasaService: NasaService) { }

  ngOnInit(): void {
    this.getEventDetails();
  }

  getEventDetails(): void {
    const eventId = this.route.snapshot.paramMap.get('id'); // Assuming the event ID is part of the route parameter
    if (eventId) {
      this.nasaService.getNasaEvent(eventId).subscribe(
        (response: Event) => {
          this.event = response; // Assuming the response contains the event details
        },
        (error) => {
          console.log('Error:', error);
        }
      );
    }
  }
}
