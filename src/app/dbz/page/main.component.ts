import { Component } from '@angular/core';
import { ICharacter } from '../interface/character.interface';
import { DBZService } from '../service/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main.component.html'
})

export class MainPageComponent {
    
    constructor( private dbzService: DBZService){

    }

    get getCharacters(): ICharacter[] {
        return this.dbzService.characters;
    }

    addCharacter(character: ICharacter): void{
        this.dbzService.addCharacter(character);
    }

    deleteCharacter(id: string): void{
        this.dbzService.deleteCharacterById(id);
    }
}