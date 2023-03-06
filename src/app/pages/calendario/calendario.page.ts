import { Component, OnInit } from '@angular/core';
import { JugadorService } from '../../services/jugador.service';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {
data:any;
  constructor(private jugadorService: JugadorService) { }

  ngOnInit() {
    this.jugadorService.getPartidos().subscribe(
      data => {
        this.data=data;
        // Aquí puedes hacer lo que necesites con los datos obtenidos
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
