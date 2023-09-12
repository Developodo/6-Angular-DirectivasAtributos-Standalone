import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  nombre: string = '';
  edad: number = 10;
  timeout!: any;

  estiloLetras = {
    color: this.edad < 18 ? 'red' : 'green',
    'font-weight': this.edad < 18 ? 'bold' : 'normal',
  };

  clasesBorde = ['contenedor', 'normal'];

  incrementaEdad(): void {
    this.edad++;
    this.estiloLetras = {
      color: this.edad < 18 ? 'red' : 'green',
      'font-weight': this.edad < 18 ? 'bold' : 'normal',
    };
    this.cambiaBorde(['contenedor', 'incrementa']);
  }
  decrementaEdad(): void {
    this.edad--;
    this.estiloLetras = {
      color: this.edad < 18 ? 'red' : 'green',
      'font-weight': this.edad < 18 ? 'bold' : 'normal',
    };
    this.cambiaBorde(['contenedor', 'decrementa']);
  }
  inserta(): void {
    alert(`${this.nombre} puede sacarse la licencia`);

    this.resetea();
  }

  poneMayuscula(event?: Event): void {
    this.nombre = this.nombre.toUpperCase().trim();
  }
  resetea(): void {
    this.nombre = '';
    this.edad = 10;
  }
  cambiaBorde(clases: string[] = ['contenedor', 'normal']): void {
    this.clasesBorde = clases;
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.clasesBorde = ['contenedor', 'normal'];
      this.timeout = undefined;
    }, 1000);
  }
}
