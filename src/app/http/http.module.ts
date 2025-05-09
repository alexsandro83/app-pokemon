import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokapiService } from '../pokapi.service'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PokapiService // Declare o serviço aqui
  ]
})
export class HttpModule { }
