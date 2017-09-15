import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {
  public idea: string;
  public aIdea: Array<string>;
  constructor() {
    this.ngOnInit();
  }

  ngOnInit() {
    this.aIdea = [];
  }

  // tslint:disable-next-line:one-line
  addIdea(){
    this.aIdea.push(this.idea);
  }

}
