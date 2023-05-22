import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaImagesService {
  private apiUrl = 'https://images-api.nasa.gov';

  constructor(private http: HttpClient) { }

  searchImages(query: string): Observable<any> {
    const url = `${this.apiUrl}/search?q=${query}`;
    return this.http.get<any>(url);
  }
}
