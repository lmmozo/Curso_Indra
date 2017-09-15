import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  public autor: string;
  public anno: string;
  public empresa: string;

  constructor() {
    this.ngOnInit();
  }

  ngOnInit() {
    this.autor = 'Luis Maria Mozo Vaquero';
    this.anno = '2017';
  }

}
