import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-caso-2',
  standalone: true,
  imports: [MaterialModule, FormsModule, CommonModule],
  templateUrl: './caso-2.component.html',
  styleUrl: './caso-2.component.css'
})
export class Caso2Component {
  numeroMaterias: number = 0;
  costoMateria: number = 520;
  totalMatricula: number | null = null;

  calcularMatricula() {
    let total = this.numeroMaterias * this.costoMateria;
    if (this.numeroMaterias > 5) {
      total = total * 0.90;  // Aplicar 10% de descuento
    }
    this.totalMatricula = total;
  }

}
