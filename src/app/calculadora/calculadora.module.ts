import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Prática do index.ts para reduzir o tamanho do nome
import { CalculadoraComponent } from './components';
import { CalculadoraService } from './services';

@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculadoraComponent
  ],
  providers: [
    CalculadoraService
  ]
})
export class CalculadoraModule { }
