import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
real="";
dolar=4.94;
res=0;
calcularDolar(){
  this.res = parseFloat(this.real)*Number(this.dolar);
}

AC=0;
AGH=0;
AT=0;
media=0;
calcularMedia(){
  this.media = Number(this.AC)* 0.2+Number(this.AGH)*0.1+Number(this.AT)*0.7;
}
}
