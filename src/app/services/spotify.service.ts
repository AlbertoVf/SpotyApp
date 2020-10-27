import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAtnvgKf_fBUjqnd7hvbx2jP7kehIcqtQNjdJnZikznJU6xRutvKtah0Jb-h4R88wZEb3u95xiO8owjmHs',
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {
      headers,
    });
  }
}
