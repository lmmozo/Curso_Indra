import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.css']
})
export class ProvinciaComponent implements OnInit {
  public provinciaSeleccionada: object;
  public provincia: object;
  public provincias: Array<object>;
  public lenguajes: Array<String>;
  public angular: Boolean;
  public javascript: Boolean;


  constructor() {
    this.ngOnInit();
  }

  ngOnInit() {
    this.provincias = [
      {idProvincia: 1, nombre: 'Zamora'},
      {idProvincia: 2, nombre: 'Madrid'}
    ];

    this.provinciaSeleccionada = null;

    this.lenguajes = [];
    this.angular = false;
    this.javascript = false;
  }

  addLenguaje() {
    if (this.angular) {
      this.lenguajes.push('Angular');
    }
    if (this.javascript) {
      this.lenguajes.push('JavaScript');
    }
  }
}
