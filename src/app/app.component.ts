import { Component } from '@angular/core';

@Component({ //Decorador: caracteristicas y propiedad que va a tener el componente
  selector: 'app-root',
  templateUrl: './app.component.html', // Propiedad del template (html)
  styleUrls: ['./app.component.css']  // Propiedad de hojas de estilo (css)
})
export class AppComponent {
  title = 'Angular-Proyect';
}
