import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  apiKey = 'a34ee84b5e4c9dbcedadbc6066591f6a';
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  constructor() { }
  buscarInfoClimaCidadeAtual() {
    const urlCompleta = 
    this.apiUrl + '?q=Dois%20Vizinhos&appid=' +this.apiKey+'&lang=pt_br&units=metrics';

    console.log(urlCompleta);
}
}