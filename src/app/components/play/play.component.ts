import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  empate: boolean;

  constructor( private activatedRoute: ActivatedRoute, private _triquiServices: TriquiServicesService ) {
      this.turno = false;
      this.ganador = false;
      this.empate = false;
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

// Envia la ficha al servicio para insertarla en la lista.
envarFicha(posicion: number) {
let result = this._triquiServices.insertarFicha( posicion, this.turno );
if ( result !== [] && result [1] ) {
this.listaTriqui = result[0];
this.ganador = result[2];
}
this.empate = this.evaluarEmpate ( this.listaTriqui );
this.turno = !this.turno;
}

// Evalua si todos los campos de la lista ya tienen ficha para declarar empate.
evaluarEmpate( listaTriqui: any [9] ) {
  if ( !listaTriqui.includes( '1') && !listaTriqui.includes( '2') && !listaTriqui.includes( '3') && !listaTriqui.includes( '4')
   && !listaTriqui.includes( '5') && !listaTriqui.includes( '6') && !listaTriqui.includes( '7') && !listaTriqui.includes( '8')
   && !listaTriqui.includes( '9')) {
    return true;
  } else {
    return false;
  }
}

}
