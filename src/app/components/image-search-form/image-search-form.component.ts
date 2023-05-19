import { Component } from '@angular/core';
import { NasaImagesService } from '../../services/nasa-images.service';

@Component({
  selector: 'app-image-search-form',
  templateUrl: './image-search-form.component.html',
  styleUrls: ['./image-search-form.component.css']
})
export class ImageSearchFormComponent {
  keyword: string = '';

  constructor(private nasaImagesService: NasaImagesService) {}

  searchImages() {
    if (this.keyword.trim() !== '') {
      this.nasaImagesService.searchImages(this.keyword).subscribe(
        (response) => {
          // Handle the API response here
          console.log(response);
        },
        (error) => {
          // Handle any errors
          console.error(error);
        }
      );
    }
  }
}

