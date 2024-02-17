import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Thor', 'luicky', 'El cap', 'Black Widow' ];
  public removed?: string;

  removeLastHeroe(): void{
   this.removed =  this.heroNames.pop();
  }

}
