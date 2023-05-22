import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { NasaImagesService } from '../../services/nasa-image-of-day.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {
  imageOfDay: any;

  constructor(
    private nasaImagesService: NasaImagesService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.getImageOfDay();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const spaceship = this.elementRef.nativeElement.querySelector('.spaceship') as HTMLElement;
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
        setInterval(getRandomPosition, 13000); // Change the interval value as desired
      }
    }, 100);
  }

  getImageOfDay(): void {
    this.nasaImagesService.getImageOfDay().subscribe(
      (response: any) => {
        console.log(response);
        this.imageOfDay = response;
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
