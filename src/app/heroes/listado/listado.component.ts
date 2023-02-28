import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['spiderman', 'Hulk', 'SuperMan']
  heroesBorrados: string[] = []
  borrarHeroe(): void{
    const heroeBorrado = this.heroes.shift() || ''
    this.heroesBorrados.push(heroeBorrado)
  }
}
