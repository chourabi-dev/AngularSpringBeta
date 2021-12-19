import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepotsRoutingModule } from './depots-routing.module';
import { DepotsComponent } from './depots.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DepotsComponent, AddComponent, ListComponent],
  imports: [
    CommonModule,
    DepotsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DepotsModule { }
