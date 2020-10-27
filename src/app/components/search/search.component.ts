import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  artists: any[] = [];
  constructor(private spotify: SpotifyService) {}
  buscar(artista: string): void {
    console.log(artista);
    this.spotify.getArtist(artista).subscribe((data: any) => {
      this.artists = data.artists.items;
      console.log(this.artists);
    });
  }
}
