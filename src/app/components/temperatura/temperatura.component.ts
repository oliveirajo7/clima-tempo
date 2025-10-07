import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-temperatura',
  standalone: true,
  imports: [],
  templateUrl: './temperatura.component.html',
  styleUrl: './temperatura.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemperaturaComponent { }
