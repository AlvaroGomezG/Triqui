import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  jugador1: string;
  jugador2: string;

  constructor( private activatedRoute: ActivatedRoute, ) {
    console.log('llego play');
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
     let texto: string [] = params[ 'nombres' ].split('-');
     this.jugador1 = texto[0];
     this.jugador2 = texto[1];
     console.log( 'jugador 1 : ' + this.jugador1 +  'jugador 2 : ' + this.jugador2 );
  });
}

}
