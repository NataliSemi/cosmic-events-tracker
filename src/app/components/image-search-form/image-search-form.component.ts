import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-search-form',
  templateUrl: './image-search-form.component.html',
  styleUrls: ['./image-search-form.component.css']
})
export class ImageSearchFormComponent {
  @Output() searchQuery = new EventEmitter<string>();

  onSubmit(query: string): void {
    this.searchQuery.emit(query);
  }
}
