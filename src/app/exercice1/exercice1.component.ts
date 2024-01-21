import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component implements OnInit {
  public name!: string;

  ngOnInit(): void {
    this.name = '';
  }

  public updateName(name: string): void {
    this.name = name;
  }
}
