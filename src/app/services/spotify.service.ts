import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
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
        'Bearer BQCGeimE6efuS8x5PIBOv-HD7ZoSIXe_GNHN3CJbTtaUXynYNPgo9xUce3jINz-PSZCAoS-_YtrfTMe-OMo',
    });
    return this.http.get(`https://api.spotify.com/v1/${query}`, { headers });
  }

  getNewReleases(): Observable<any> {
    return this.getQuery('browse/new-releases').pipe(
      map((data) => data['albums'].items)
    );
  }

  getArtist(artista: string): Observable<any> {
    return this.getQuery(`search?q=${artista}&type=artist&limit=15`).pipe(
      map((data) => data['artists'].items)
    );
  }
}
