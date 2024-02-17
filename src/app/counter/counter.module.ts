import { NgModule } from "@angular/core";
import { CounterComopnent } from "./components/counter/counter.component";


@NgModule({
  declarations:[
    CounterComopnent
  ],
  exports: [
    CounterComopnent
  ]
})
export class CounterModule{}
