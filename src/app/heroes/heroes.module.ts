import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HeroComponent,
        ListComponent
    ],
    exports: [
        HeroComponent, 
        ListComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class HeroesModule {

}