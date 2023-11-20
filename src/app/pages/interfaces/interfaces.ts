export interface IUser {
  id: number;
  nombre: string;
  apellido: string;
  username: string;
  tipousuario: string;
  email: string;
  password: string;
  isactive?: boolean;
  carrera?: string;
}

export interface IAlumno extends IUser {
  isactive: boolean;
  carrera: string;
}

export interface IAlumnos extends IUser {
  carrera: string;
}

export interface IDocente extends IUser {
  isactive: boolean;
}

export interface IDocentes extends IUser {
}

export interface Users extends IUser {
  role: string;
  isactive: boolean;
}

export interface SimpleUsers extends IUser {
  role: string;
}
