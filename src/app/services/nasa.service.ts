import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiUrl = 'https://eonet.gsfc.nasa.gov/api/v2.1/events';

  constructor(private http: HttpClient) {}

  getNasaEvents(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getNasaEvent(eventId: string): Observable<any> {
    const eventUrl = `${this.apiUrl}/${eventId}`;
    return this.http.get<any>(eventUrl);
  }
}
