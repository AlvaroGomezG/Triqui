import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  public enviarNombres(jugador1: string, jugador2: string ) {
  let nombres: string =  jugador1 + '-' + jugador2;
  this.router.navigate( ['/play',  nombres] );
  }
}
