import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OpenWeatherService } from '../../service/open-weather.service';
import { WeatherResponse } from '../../models/wheater-response.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss'],
})
export class ClimaComponent implements OnInit {
  
  navegador = inject(Router);
  openWeatherService = inject(OpenWeatherService);
  dadosClima = toSignal

  constructor() {}

  ngOnInit(): void {
    this.openWeatherService.buscarInfoClimaCidadeAtual()
  }

  navegarParaTelaDePesquisa() {
    this.navegador.navigate(['/pesquisa']);
  }
}