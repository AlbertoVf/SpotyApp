import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}
  private auth =
    'Bearer BQD6tmj5P_KKegAKBS0kKwhRYKngl8oYLe31n78lWk4gbJzlfq5lxIyeHhYIAnbLv14C4FGu-IHMagzQfiM';

  getNewReleases(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: this.auth,
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {
      headers,
    });
  }

  getArtist(artista: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: this.auth,
    });
    return this.http.get(
      `https://api.spotify.com/v1/search?q=${artista}&type=artist&limit=15`,
      {
        headers,
      }
    );
  }
}
