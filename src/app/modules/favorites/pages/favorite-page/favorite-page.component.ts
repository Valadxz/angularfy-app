import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent implements OnInit {
  listResults$: Observable<any[]> = of([]);
  @Input() title: string = ''
  @Input() mode: 'small' | 'big' = 'big'
  @Input() dataTracks: Array<TrackModel> = []
  @Input() tracks: TrackModel[] = []
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }
 
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    // Aquí puedes suscribirte a la función sendTracks$()
    this.searchService.sendTracks$().subscribe((data: any[]) => {
      // Asignar los resultados a la propiedad 'listResults$'
      this.listResults$ = of(data);
    });
  }


  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
    console.log(this.optionSort);

  }

  
  
}