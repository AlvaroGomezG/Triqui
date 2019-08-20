import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TriquiServicesService {

  jugador1: string;
  jugador2: string;
  listaTriqui: any [9];

  constructor() {
  }

  enviarNombres(nombreJugador1: string, nombreJugador2: string) {
  this.jugador1 = nombreJugador1;
  this.jugador2 = nombreJugador2;
  this.listaTriqui = [ '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  }

  insertarFicha(posicion: number, turno: boolean) {
    if ( this.listaTriqui [posicion] !== 'X' &&  this.listaTriqui [posicion] !== 'O' ) {
    if ( turno  ) {
    this.listaTriqui [posicion] = 'O';
    return [this.listaTriqui, true, this.evaluar( this.listaTriqui)];
     } else {
    this.listaTriqui [posicion] = 'X';
    return [this.listaTriqui, true, this.evaluar( this.listaTriqui)];
     }
    }
    return [];
  }

  evaluar( lista: string [9]) {
   let matriz = this.ConvertirMatriz( lista, 3 );

   for ( let i = 0; i < 3; i++) {
    if ( matriz[i][0] === matriz[i][1] &&  matriz[i][0] === matriz[i][2] ) {
   return true;
   }
  }
   for (let i = 0; i < 3; i ++ ) {
  if ( matriz[0][i] === matriz[1][i] && matriz[0][i] === matriz[2][i]) {
  return true;
  }
  }
   if ( matriz[0][0] === matriz[1][1] && matriz[0][0]  === matriz[2][2] ) {
  return true;
  }
   if ( matriz[0][2] === matriz[1][1] && matriz[0][2] === matriz[2][0] ) {
  return true;
  }
   return false;
  }

  ConvertirMatriz(list, elementsPerSubArray) {
    let matriz = [], i, k;
    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matriz[k] = [];
        }
        matriz[k].push(list[i]);
    }
    return matriz;
}

}

