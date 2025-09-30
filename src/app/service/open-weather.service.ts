import { Injectable, inject } from '@angular/core';
import { WeatherResponse } from '../models/wheater-response.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OpenWeatherService {
  private apiKey = 'a34ee84b5e4c9dbcedadbc6066591f6a';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private http = inject(HttpClient);

  constructor() {
  }

  buscarInfoClimaCidadeAtual(): Observable<WeatherResponse> {

    const urlCompleta =
        this.apiUrl + '?q=Dois%20Vizinhos&appid=' + this.apiKey + '&lang=pt_br&units=metrics';

    return this.http.get<WeatherResponse>(urlCompleta);
  }
}