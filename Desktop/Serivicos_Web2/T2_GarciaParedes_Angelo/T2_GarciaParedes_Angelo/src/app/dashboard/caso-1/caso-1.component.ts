import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';

@Component({
  selector: 'app-caso-1',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './caso-1.component.html',
  styleUrl: './caso-1.component.css'
})
export class Caso1Component {
  resultadoFinal = "";
  salario: number = 0;
  añosTrabajados: number = 0;
  utilidad: number | null = null;

  calcularUtilidad() {
    if (this.añosTrabajados < 1) {
      this.utilidad = this.salario * 0.05;
    } else if (this.añosTrabajados >= 1 && this.añosTrabajados < 2) {
      this.utilidad = this.salario * 0.07;
    } else if (this.añosTrabajados >= 2 && this.añosTrabajados < 5) {
      this.utilidad = this.salario * 0.10;
    } else if (this.añosTrabajados >= 5 && this.añosTrabajados < 10) {
      this.utilidad = this.salario * 0.15;
    } else {
      this.utilidad = this.salario * 0.20;
    }
    
    this.resultadoFinal = "Su utilidad es = " + this.utilidad;
  }
}
