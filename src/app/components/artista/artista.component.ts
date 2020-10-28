import { SpotifyService } from './../../services/spotify.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [],
})
export class ArtistaComponent {
  artista: any = {};
  loading: boolean;
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe((params) => {
      this.getArtist(params['id']);
    });
  }

  getArtist(id: string): void {
    this.loading = true;
    this.spotify.getArtist(id).subscribe((artista) => {
      this.artista = artista;
      this.loading = false;
    });
  }
}
