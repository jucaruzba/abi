import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.page.html',
  styleUrls: ['./jugador.page.scss'],
})
export class JugadorPage implements OnInit {
  jugador: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const state = history.state;
    if (state && state.jugador) {
      this.jugador = state.jugador;
      console.log(this.jugador);
    }
  }

}
