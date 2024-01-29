import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomRoutingModule } from './random-routing.module';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RandomRoutingModule,
    SharedModule
  ]
})
export class RandomModule { }
