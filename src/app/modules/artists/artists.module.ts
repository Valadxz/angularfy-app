import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ArtistsComponent } from '@shared/components/artists/artists.component';



@NgModule({
  declarations: [
    ArtistsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ArtistsModule { }
