import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
<h2> {{titulo}}</h2>
  <h3> {{ counter }}</h3>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetCounter(10)"> Reset </button>
  <button (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComopnent{
  public titulo:string  = 'Counter';
  public counter: number = 10;

  increaseBy(value: number): void{
    this.counter += value;
  }

  resetCounter(value: number): void{
    this.counter = value;
  }
}
