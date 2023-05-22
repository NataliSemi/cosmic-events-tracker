import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/enviroments'

@Injectable({
  providedIn: 'root'
})
export class NasaImagesService {
  private apiUrl = 'https://api.nasa.gov';

  constructor(private http: HttpClient) {}

  getImageOfDay(): Observable<any> {
    const url = `${this.apiUrl}/planetary/apod?api_key=${environment.apiKey}`;
    return this.http.get<any>(url);
  }
}

