import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha',
})
export class FechaPipe implements PipeTransform {
  transform(fecha: string): string {
    const date = new Date(fecha);
    const d = date.getDay();
    const m = date.getMonth();
    const y = date.getFullYear();
    if (fecha.length > 4) {
      return `${this.formatear(d)} / ${this.formatear(m)} / ${y}`;
    } else if (fecha.length == 4) {
      return `${y}`;
    }
  }
  formatear(d: number): string {
    return d < 10 ? '0' + d.toString() : d.toString();
  }
}
