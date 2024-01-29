import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})

export class RandomComponent implements OnInit {
  listResults$: Observable<any[]> = of([]);
  @Input() title: string = '';
  @Input() mode: 'small' | 'big' = 'big';
  @Input() dataTracks: Array<TrackModel> = [];
  @Input() tracks: TrackModel[] = [];
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' };
data: any;
  
uniqueArtist: any;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    // Suscribirse a la función sendRandomArtist$()
    this.searchService.sendRandomArtist$().subscribe((data: any[]) => {
      // Verificar que haya datos
      if (data && data.length > 0) {
        // Asignar el primer elemento de data
        this.uniqueArtist = data[0];
        this.listResults$ = of(data);
      }
    });
  }
  


}

