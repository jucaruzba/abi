import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JugadorService } from '../../services/jugador.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  curp: string = '';

  constructor(
    private jugadorService: JugadorService,
    private navController: NavController
  ) { }

  jugadores: any[] = [];

  ngOnInit() {
    this.jugadorService.getJugadores().subscribe(
      data => {
        this.jugadores = data;
        console.log(this.jugadores)
      },
      error => {
        console.log(error);
      }
    );
  }

  onConsultar() {
    const curpInput = document.getElementById("input-curp") as HTMLInputElement;
    const curp = curpInput.value.toUpperCase();
  
    const jugadorEncontrado = this.jugadores.find(jugador => jugador.curp === curp);
  
    if (jugadorEncontrado) {
      // Mostrar los datos del jugador encontrado
      console.log(jugadorEncontrado);
      
      // Navegar a la página que mostrará los detalles del jugador
      this.navController.navigateForward('/principal', { queryParams: { jugador: JSON.stringify(jugadorEncontrado) } });
    } else {
      // Mostrar un mensaje indicando que no se encontró al jugador
      console.log("Jugador no encontrado");
    }
  
    curpInput.value = "";
  }

}
