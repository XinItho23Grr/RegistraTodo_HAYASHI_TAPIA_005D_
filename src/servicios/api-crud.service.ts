import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser, IAlumno, IDocente, IAlumnos, IDocentes } from 'src/app/pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {

  constructor(private httpClient: HttpClient) { }

  CrearUsuario(newUsuario: IAlumnos | IDocentes): Observable<IAlumno | IDocente> {
    const url = newUsuario.tipousuario === 'alumno' ? 'alumnos' : 'docentes';
    return this.httpClient.post<IAlumno | IDocente>(`${environment.apiUrl}/${url}`, newUsuario);
  }

  BuscarUsuarioId(usuario: number, tipoUsuario: string): Observable<any> {
    const url = tipoUsuario === 'alumno' ? 'alumnos' : 'docentes';
    return this.httpClient.get<any>(`${environment.apiUrl}/${url}/${usuario}`);
  }

  ActualizarUsuario(usuario: any): Observable<any> {
    const url = usuario.tipousuario === 'alumno' ? 'alumnos' : 'docentes';
    return this.httpClient.put<any>(`${environment.apiUrl}/${url}/${usuario.id}`, usuario);
  }

  EliminarUsuario(usuario: any): Observable<any> {
    const url = usuario.tipousuario === 'alumno' ? 'alumnos' : 'docentes';
    return this.httpClient.delete<any>(`${environment.apiUrl}/${url}/${usuario.id}`);
  }
}
