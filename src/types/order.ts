export interface CustomerData {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  ciudad: string;
  direccion: string;
  observaciones: string;
}

export interface OrderData {
  cliente: CustomerData;
  preferencias: string[]; // IDs of selected experience categories
}

export interface FormErrors {
  nombre?: string;
  apellidos?: string;
  email?: string;
  telefono?: string;
  ciudad?: string;
  direccion?: string;
  observaciones?: string;
  preferencias?: string;
}
