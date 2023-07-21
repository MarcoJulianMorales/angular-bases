import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DBZRoutingModule } from './dbz-routing.module';
import { MainPageComponent } from './page/main.component';
import { ListComponent } from './component/list/list.component';
import { AddCharacterComponent } from './component/add-character/add-character.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    DBZRoutingModule,
  ],
  exports: [
    MainPageComponent
  ]
})
export class DBZModule { }
