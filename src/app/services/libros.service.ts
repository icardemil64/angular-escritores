import { Injectable } from '@angular/core';
import {LIBROS} from '../db/libros.db';
import { Libro } from '../models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

  getPorEscritor(pEscritorId: number): Promise<Libro[]>{
    return new Promise((resolve,reject) => {
      resolve(LIBROS.filter(libros => libros.escritor == pEscritorId));
    });
  }
}
