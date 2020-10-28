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

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.spotify.getNewReleases().subscribe((data: any) => {
      this.newRelease = data;
      this.loading = false;
    });
  }

  ngOnInit(): void {}
}
