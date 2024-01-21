import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css'],
})
export class Exercice3Component implements OnInit {
  public status!: boolean;

  ngOnInit(): void {
    this.status = true;
  }

  public updateStatus(): void {
    this.status = !this.status;
  }
}
