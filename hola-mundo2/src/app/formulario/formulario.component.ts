import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public nombre: String;
  constructor() { }

  ngOnInit() {
  }

}
