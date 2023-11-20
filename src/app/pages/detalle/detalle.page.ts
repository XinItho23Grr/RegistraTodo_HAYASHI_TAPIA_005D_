import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/servicios/api-crud.service';
import { Router } from '@angular/router';
import { IUser } from '../interfaces/interfaces';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  usuario: IUser = {
    id: 0,
    nombre: '',
    apellido: '',
    username: '',
    tipousuario: '',
    carrera: '',
    email: '',
    password: ''
  };

  constructor(private apiCrud: ApiCrudService, 
              private router: Router,
              private menuController: MenuController) { }

  ngOnInit() {
  }
  
  mostrarMenu(){
    this.menuController.open('first');
  }

  ionViewWillEnter() {
    this.getUsuarioById(this.getIdFromUrl());
  }

  getIdFromUrl() {
    let url = this.router.url;
    let arr = url.split("/", 3);
    let id = parseInt(arr[2]);
    return id;
  }

  getUsuarioById(id: number) {
    this.apiCrud.BuscarUsuarioId(id, 'alumno').subscribe(
      (resp: any) => {
        this.usuario = {
          id: resp[0].id,
          nombre: resp[0].nombre,
          apellido: resp[0].apellido,
          username: resp[0].username,
          tipousuario: resp[0].tipousuario,
          carrera: resp[0].carrera,
          email: resp[0].email,
          password: resp[0].password
        };
      }
    );
  }
}
