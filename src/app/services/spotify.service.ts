import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBBp6zr7bOFrGe9D5ePhLHaj5AZjRmCIa1K4EL5wK_kjgckv4SMAKl4GSIw-io3yvJo-8pYS5uBMtKnj3M',
    });
    this.http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
