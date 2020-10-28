import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  newRelease: any = [];
  loading: boolean;
  error = false;
  aviso: string;
  cod: string;
  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.spotify.getNewReleases().subscribe(
      (data: any) => {
        this.newRelease = data;
        this.loading = false;
      },
      (errorService: any) => {
        this.loading = false;
        this.error = true;
        this.cod = errorService.error.error.status;
        this.aviso = errorService.error.error.message;
      }
    );
  }

  ngOnInit(): void {}
}
