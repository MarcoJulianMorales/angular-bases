import { Injectable } from '@angular/core';
import { ICharacter } from '../interface/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DBZService {
    public characters: ICharacter[] = [
        {
            id: uuid(),
            name: 'Goku',
            strong: 9500
        },
        {
            id: uuid(),
            name: 'krillin',
            strong: 1000
        },
        {
            id: uuid(),
            name: 'Vegeta',
            strong: 8000
        }
    ];

    addCharacter(character: ICharacter): void {
        const newCharacter: ICharacter = {
            id: uuid(), ...character
        };

        this.characters.push(newCharacter);
    }

    deleteCharacterById(id: string): void{
        if(!id) return;
        this.characters = this.characters.filter(c => c.id !== id);
    }
}