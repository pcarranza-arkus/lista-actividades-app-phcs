import { Component } from '@angular/core';
import { ListaActividadesComponent } from './lista-actividades/lista-actividades.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ListaActividadesComponent], // Importar el componente de lista
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lista-actividades-angular19';
}