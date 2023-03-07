import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JugadorService } from '../../services/jugador.service';
import { Jugador } from '../interfaces/jugador';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {
  curp: string = '';
  data: Jugador[] = [];
  jugadorSeleccionado!: Jugador; // Aserción de no nulo

  constructor(
    private jugadorService: JugadorService,
  ) { }

  ngOnInit() {
    this.jugadorService.getJugadores().subscribe(
      data => {
        this.data = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  onConsultar() {
    this.jugadorService.getJugadores().subscribe(
      (jugadores: Jugador[]) => {
        const curp = this.curp.trim().replace(/\s/g, '').toUpperCase(); // Eliminar espacios y reemplazar caracteres no permitidos
        const jugador = jugadores.find(j => j.curp.toUpperCase() === curp);
        if (jugador) {
          console.log(jugador);
        } else {
          console.log(`Jugador con CURP ${this.curp} no encontrado`);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
}
