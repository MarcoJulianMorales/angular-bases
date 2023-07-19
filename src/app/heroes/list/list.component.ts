import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  heroesNames: string [] = ['John Wick', 'Thomas Shelby', 'Eleven', 'Levi Ackerman']
  deletedHero?: string;

  borrar(): void{
    this.deletedHero = this.heroesNames.pop();
  }
}
