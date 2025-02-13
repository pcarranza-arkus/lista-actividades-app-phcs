import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-actividades',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importar FormsModule para usar ngModel
  templateUrl: './lista-actividades.component.html',
  styleUrls: ['./lista-actividades.component.css']
})
export class ListaActividadesComponent {
  actividades: { id: number, nombre: string }[] = [];
  nuevaActividad: string = '';
  actividadEditando: { id: number, nombre: string } | null = null;

  agregarActividad() {
    if (this.nuevaActividad.trim()) {
      const nuevaActividad = {
        id: this.actividades.length + 1,
        nombre: this.nuevaActividad.trim()
      };
      this.actividades.push(nuevaActividad);
      this.nuevaActividad = '';
    }
  }

  editarActividad(actividad: { id: number, nombre: string }) {
    this.actividadEditando = { ...actividad };
  }

  guardarEdicion() {
    if (this.actividadEditando) {
      const index = this.actividades.findIndex(a => a.id === this.actividadEditando!.id);
      if (index !== -1) {
        this.actividades[index] = { ...this.actividadEditando };
      }
      this.actividadEditando = null;
    }
  }

  eliminarActividad(id: number) {
    this.actividades = this.actividades.filter(a => a.id !== id);
  }
}