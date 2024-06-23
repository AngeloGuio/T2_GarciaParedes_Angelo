import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-caso-1',
  standalone: true,
  imports: [MaterialModule, FormsModule, CommonModule],
  templateUrl: './caso-1.component.html',
  styleUrl: './caso-1.component.css'
})
export class Caso1Component {
  resultadoFinal = "";
  salario: number = 0;
  anosTrabajados: number = 0;
  utilidad: number | null = null;

  calcularUtilidad() {
    if (this.anosTrabajados < 1) {
      this.utilidad = this.salario * 0.05;
    } else if (this.anosTrabajados >= 1 && this.anosTrabajados < 2) {
      this.utilidad = this.salario * 0.07;
    } else if (this.anosTrabajados >= 2 && this.anosTrabajados < 5) {
      this.utilidad = this.salario * 0.10;
    } else if (this.anosTrabajados >= 5 && this.anosTrabajados < 10) {
      this.utilidad = this.salario * 0.15;
    } else {
      this.utilidad = this.salario * 0.20;
    }
    
    this.resultadoFinal = "Su utilidad es = " + this.utilidad;
  }
}
