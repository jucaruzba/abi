import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JugadorService } from '../../services/jugador.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {
  data: any;
  club: string;
  categoria: string;

  constructor(
    private jugadorService: JugadorService, 
    private route: ActivatedRoute,
    ) { 
      this.club='',
      this.categoria=''
    }

    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        this.club = params['club'];
        this.categoria = params['categoria'];
        console.log(this.club, this.categoria)
      });
      this.jugadorService.getPartidos().subscribe(
        data => {
          console.log(data)
          this.data = data.filter(partido => partido.categoria === this.categoria && (partido.local === this.club || partido.visitante === this.club));
          console.log(this.data);
        },
        error => {
          console.log(error);
        }
      );
    }
}
