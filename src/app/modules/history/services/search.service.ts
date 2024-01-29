import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly URL = environment.api

  constructor(private http: HttpClient) { }
searchTracks$(term: string): Observable<any[]> {
    return this.http.get(`${this.URL}/tracks`)
      .pipe(
        map((dataRaw: any) => {
          const results = dataRaw.data;

          // Filtrar los resultados según el término de búsqueda
          const filteredResults = results.filter((result: any) =>
            result.name.toLowerCase().includes(term) ||
            result.artist.name.toLowerCase().includes(term) ||
            result.album.toLowerCase().includes(term)
          );

          return filteredResults;
        })
      );
  }
  sendTracks$(): Observable<any[]> {
    return this.http.get(`${this.URL}/tracks`)
      .pipe(
        map((dataRaw: any) => {
          const results = dataRaw.data;
          return results;
        })
      );
  }

  // En tu servicio SearchService

searchArtist$(artistId: string, term?: string): Observable<any[]> {
  return this.http.get(`${this.URL}/tracks`)
    .pipe(
      map((dataRaw: any) => {
        const results = dataRaw.data;
        // Filtrar los resultados según el término de búsqueda y el artista
        const filteredResults = results.filter((result: any) => 
          (result.artist._id === artistId || result.artist.name.toLowerCase().includes(artistId))
        );
        return filteredResults;
      })
    );
}

randomArtistId(min: number, max: number) {
  const randomFraction = Math.random();
  const randomNumberInRange = min + randomFraction * (max - min);
  return Math.floor(randomNumberInRange);
}


sendRandomArtist$(): Observable<any[]> {
  const randomArtistId = this.randomArtistId(1, 5).toString();
  return this.searchArtist$(randomArtistId);
}

}