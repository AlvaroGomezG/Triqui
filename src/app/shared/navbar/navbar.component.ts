import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

TittleHome: string;
TitllePlay: string;

  constructor() {

    this.TitllePlay = 'Jugar';
    this.TittleHome = 'Inicio';
   }

  ngOnInit() {
  }

}
