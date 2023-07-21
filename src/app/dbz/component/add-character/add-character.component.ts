import { Component, EventEmitter, Output } from '@angular/core';
import { ICharacter } from '../../interface/character.interface';
import { v4 } from 'uuid';

@Component({
  selector: 'bdz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  @Output('character')
  public onNewCharacter: EventEmitter<ICharacter> = new EventEmitter();

  public character: ICharacter = {
    id: v4(),
    name: 'Rikudou Sennin',
    strong: 100000000000000
  }

  addCharacter(): void{
    if(this.character.name.length == 0)
      return;
      
    this.onNewCharacter.emit(this.character);

    this.character = { name: '', strong: 0};
  }
}
