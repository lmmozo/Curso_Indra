import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  public articulo: String;
  constructor() { 
    this.ngOnInit();
  }

  ngOnInit() {
  }
}
