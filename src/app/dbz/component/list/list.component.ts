import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from '../../interface/character.interface';
import { v4 } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output('onDelete')
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();
  
  @Input()
  public charactersList: ICharacter [] = [
    {
      id: v4(),
      name: 'Trunks',
      strong: 10
    }
  ]

  onDelete(id: string): void{
    this.onDeleteCharacter.emit(id);
  }
}