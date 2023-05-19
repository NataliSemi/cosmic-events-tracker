import { Component, OnInit } from '@angular/core';
import { NasaImagesService } from '../../services/nasa-image-of-day.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  imageOfDay: any;

  constructor(private nasaImagesService: NasaImagesService) { }

  ngOnInit(): void {
    this.getImageOfDay();
  }

  getImageOfDay(): void {
    this.nasaImagesService.getImageOfDay().subscribe(
      (response: any) => {
        console.log(response)
        this.imageOfDay = response;
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
