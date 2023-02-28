import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    
        <h1>{{title}}</h1>
        <h3>La base es: <strong> {{base}} </strong></h3>

        <button (click)="acomular('sumar')"> + {{base}}</button>

        <span>{{contador}}</span>

        <button (click)="acomular('restar')"> - {{base}}</button>
            `
})

export class ContadorComponent{
  title: string = 'Contador App';
  contador: number = 0;
  base:number = 5;
  acomular(valor:string){
    valor == 'sumar' ? this.contador += this.base : this.contador -= this.base;
  }
}