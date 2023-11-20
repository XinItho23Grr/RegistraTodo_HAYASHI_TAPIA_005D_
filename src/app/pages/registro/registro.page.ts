import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/servicios/api-crud.service';
import { Router } from '@angular/router';
import { IUser, IAlumno, IDocente } from '../interfaces/interfaces';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  RegistrarForm: FormGroup;

  newUsuario: IUser = {
    id: 0,
    nombre: '',
    apellido: '',
    username: '',
    tipousuario: '',
    email: '',
    password: '',
    isactive: true, 
  };

  constructor(
    private apiCrud: ApiCrudService,
    private router: Router,
    private fbuilder: FormBuilder
  ) {
    this.RegistrarForm = this.fbuilder.group({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      tipoUsuario: new FormControl('', Validators.required),
      carrera: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }

  ngOnInit() {}

  crearUsuario() {
    this.newUsuario = {
      id: 0,
      nombre: this.RegistrarForm.value.nombre,
      apellido: this.RegistrarForm.value.apellido,
      username: this.RegistrarForm.value.username,
      tipousuario: this.RegistrarForm.value.tipoUsuario,
      email: this.RegistrarForm.value.email,
      password: this.RegistrarForm.value.password,
      isactive: true, 
    };

    if (this.RegistrarForm.value.tipoUsuario === 'Alumno') {
      this.newUsuario = {
        ...this.newUsuario,
        isactive: true,
        carrera: this.RegistrarForm.value.carrera,
      } as IAlumno;
    } else if (this.RegistrarForm.value.tipoUsuario === 'Docente') {
      this.newUsuario = {
        ...this.newUsuario,
        isactive: true,
      } as IDocente;
    }

    this.apiCrud.CrearUsuario(this.newUsuario).subscribe({
      next: result => {
        console.log('Usuario registrado:', result);
      },
      error: err => {
        console.error('Error al registrar usuario:', err);
      }
    });
  }
}