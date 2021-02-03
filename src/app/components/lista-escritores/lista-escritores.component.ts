import { Component, OnInit } from '@angular/core';
import { Escritor } from 'src/app/models/escritor.model';
import { EscritoresService } from '../../services/escritores.service';

@Component({
  selector: 'app-lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.css']
})
export class ListaEscritoresComponent implements OnInit {

  arrayEscritores: Escritor[];
  constructor( private escritoresService: EscritoresService) { }

  async ngOnInit() {
/*  this.arrayEscritores = this.escritoresService.getAll();
    this.escritoresService.getAllPromise()
    .then(escritores => {
      this.arrayEscritores = escritores;
    }) */
    this.arrayEscritores = await this.escritoresService.getAllPromise();
  }

  async onChange($event){
    if($event.target.value === 'todos'){
      this.arrayEscritores = await this.escritoresService.getAllPromise();
    }
    else{
      this.arrayEscritores = await this.escritoresService.getPorPais($event.target.value);
    }
  }
}
