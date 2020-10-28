import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCQERKl8KUPTlmRxSEHbCChi4Rb_k4MHyl452ZS9ENF0qIIP2GT5Y4m0DN0Fq17rSuK02cpJDuj_x0drnA',
    });
    return this.http.get(`https://api.spotify.com/v1/${query}`, { headers });
  }

  getNewReleases(): Observable<any> {
    return this.getQuery('browse/new-releases').pipe(
      map((data) => data['albums'].items)
    );
  }

  getArtists(artista: string): Observable<any> {
    return this.getQuery(`search?q=${artista}&type=artist&limit=15`).pipe(
      map((data) => data['artists'].items)
    );
  }

  getArtist(id: string): Observable<any> {
    return this.getQuery(`artists/${id}`);
  }

  getTopTraks(id: string): Observable<any> {
    let pais = 'US';
    return this.getQuery(`artists/${id}/top-tracks?market=${pais}`).pipe(
      map((data) => data['tracks'])
    );
  }
}
