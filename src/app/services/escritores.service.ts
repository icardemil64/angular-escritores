import { Injectable } from '@angular/core';
import {ESCRITORES} from '../db/escritores.db';
import { Escritor } from '../models/escritor.model';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() { }

  getAll(): Escritor[] {
    return ESCRITORES;
  }

  getAllPromise(): Promise<Escritor[]>{
    return new Promise((resolve,reject) => resolve(ESCRITORES));
  }

  getPorPais(pPais: string): Promise<Escritor[]>{
    return new Promise((resolve,reject) => {
      resolve(ESCRITORES.filter(escritor => escritor.pais === pPais));
    })
  }
}
