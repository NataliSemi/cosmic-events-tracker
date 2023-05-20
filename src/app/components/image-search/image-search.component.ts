import { Component } from '@angular/core';
import { NasaImagesService } from '../../services/nasa-images.service';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})
export class ImageSearchComponent {
  query!: string;
  images!: any[];

  constructor(private nasaImagesService: NasaImagesService) {}

  searchImages(): void {
    if (this.query) {
      this.nasaImagesService.searchImages(this.query).subscribe(
        (response: any) => {
          this.images = response.collection.items;
        },
        (error) => {
          console.log('Error:', error);
        }
      );
    }
  }
}

