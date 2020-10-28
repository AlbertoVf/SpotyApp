import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css'],
})
export class TarjetasComponent {
  @Input() items: any[] = [];
  constructor(private router: Router) {}

  verArtista(item: any): void {
    let artistaId: string;
    if (item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artist[0].id;
    }
    this.router.navigate(['/artist', artistaId]);
  }
}
