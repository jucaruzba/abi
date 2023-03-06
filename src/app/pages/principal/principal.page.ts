import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  jugador: any;
  
  opcionesSlide={
    loop:true,
 
  }
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const state = history.state;
    if (state && state.jugador) {
      this.jugador = state.jugador;
      console.log(this.jugador);
    }
  }
  
}
