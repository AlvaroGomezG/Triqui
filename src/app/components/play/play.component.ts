import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TriquiServicesService } from '../../services/triqui-services.service';


@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  jugador1: string;
  jugador2: string;
  turno: boolean;
  listaTriqui: any [9];
  ganador: boolean;
  i: number;
  j: number;

  constructor( private activatedRoute: ActivatedRoute, private _triquiServices: TriquiServicesService ) {
      this.turno = false;
      this.ganador = false;
      this.listaTriqui = [ '1', '2', '3', '4', '5', '6', '7', '8', '9'];
 }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
     let texto: string [] = params[ 'nombres' ].split('-');
     this.jugador1 = texto[0];
     this.jugador2 = texto[1];
     this._triquiServices.enviarNombres( this.jugador1, this.jugador2 );
  });
}

envarFicha(posicion: number) {
let result = this._triquiServices.insertarFicha( posicion, this.turno );
if ( result !== [] && result [1] ) {
this.listaTriqui = result[0];
this.ganador = result[2];
}
this.turno = !this.turno;
}

}
