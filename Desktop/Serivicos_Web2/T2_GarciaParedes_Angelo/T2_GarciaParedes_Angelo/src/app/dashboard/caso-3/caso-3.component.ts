import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';

@Component({
  selector: 'app-caso-3',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './caso-3.component.html',
  styleUrl: './caso-3.component.css'
})
export class Caso3Component {
   tipoVehiculo: string = '';
  tasaAlcohol: number | null = null;
  resultado: string | null = null;

  calcularResultado() {
    const tasaMaxima = this.getTasaMaxima(this.tipoVehiculo);
    if (this.tasaAlcohol !== null) {
      if (this.tasaAlcohol <= tasaMaxima) {
        this.resultado = 'Negativo';
      } else {
        this.resultado = 'Positivo';
      }
    }
  }

  getTasaMaxima(tipoVehiculo: string): number {
    switch (tipoVehiculo) {
      case 'C':
      case 'A':
      case 'M':
        return 0.3;
      case 'T':
        return 0.5;
      default:
        return 0;
    }
  }

}
