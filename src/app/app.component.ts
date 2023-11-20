import { Component } from '@angular/core';

interface Componente {
  name: string;
  icon: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor() {}

  componentes: Componente[] = [
    {
      name: 'Inicio',
      icon: 'home-outline',
      redirecTo: '/inicio',
    },
    {
      name: 'Info',
      icon: 'book-outline',
      redirecTo: '/info',
    },
    {
      name: 'Escanear QR',
      icon: 'scan',
      redirecTo: '/qr',
    },
    {
      name: 'Detalle',
      icon: 'book-outline',
      redirecTo: '/detalle',
    },
    {
      name: 'noticias',
      icon: 'book-outline',
      redirecTo: '/noticias',
    },

  ];
  
    bottomComponents: Componente[] = [
      {
        name: 'Iniciar Sesión',
        icon: '',
        redirecTo: '/iniciosesion',
      },
      {
        name: 'Registrarse',
        icon: '',
        redirecTo: '/registro',
      }
    ];
  }
