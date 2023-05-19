import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaImagesService {
  private apiKey = 'PzuVdE4FF2kd2CeLexboMokXZOQ8Yg0d3g2P3OQe';
  private apiUrl = 'https://images-api.nasa.gov';

  constructor(private http: HttpClient) {}

  searchImages(keyword: string): Observable<any> {
    const url = `${this.apiUrl}/search?q=${encodeURIComponent(keyword)}&api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
