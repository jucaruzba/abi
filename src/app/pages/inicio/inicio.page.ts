import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JugadorService } from '../../services/jugador.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  curp: string = '';

  constructor(
    private jugadorService: JugadorService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onConsultar() {
    this.jugadorService.getJugador(this.curp).subscribe(
      data => {
        if (data.data) {
          this.router.navigate(['/principal'], { state: { jugador: data.data } });
          console.log(data)
        } else {
          alert('No existe un jugador con la curp que consultó');
        }
      },
      error => {
        console.log(error);
      }
    );
  }  

}
