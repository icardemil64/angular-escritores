import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEscritoresComponent } from './components/lista-escritores/lista-escritores.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ListaLibrosComponent } from './components/lista-libros/lista-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEscritoresComponent,
    DetalleComponent,
    ListaLibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
