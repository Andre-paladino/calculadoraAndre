import { Component, } from '@angular/core';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.scss'],
})
export class TecladoComponent  {

  constructor() { }

  public resultado = "";

clicar(valor:string){
  this.resultado+=valor;

}

limpar(){
  this.resultado="";
}
 
finalizar(){
  this.resultado = eval(this.resultado).toString();
}
}