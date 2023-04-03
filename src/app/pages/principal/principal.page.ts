import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  jugador: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['jugador']) {
        this.jugador = JSON.parse(params['jugador']);
      }
    });
  }
}