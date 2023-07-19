import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public nombre: string = 'Marco';
  public edad: number = 26;
  public nombreCap: string = this.getCapitalizedName;

  get getCapitalizedName(): string{
    return this.nombre.toUpperCase();
  }

  changeNombre(): void{
    this.nombre = 'Macana';
  }

  changeEdad(): void{
    this.edad = ++this.edad;
  }

  reset(): void{
    this.nombre = 'Marco';
    this.edad = 26;
  }
}
