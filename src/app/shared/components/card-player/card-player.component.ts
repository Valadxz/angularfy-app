import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {
  @Input() mode: 'bug' | 'small' | 'big' = 'small' 
  @Input() track: TrackModel = { _id: 0, name: '',  album: '', year: '', dur: '', url: '', cover: '',  artist: { _id: 0, avatar: '', name: '', nickname: '', nationality: '' } };

  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
  }

  sendPlay(track: TrackModel): void {
    this.multimediaService.trackInfo$.next(track)
  }

}
