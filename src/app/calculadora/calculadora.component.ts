import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  resultado: string = "";
  constructor() { 
  }

  ngOnInit(): void {
  }

  valorNumero(numero: string): void{
    this.resultado = this.resultado.concat(numero);
  }

  calcularResultado():void{
    this.resultado = eval(this.resultado).toString();
  }

  borrarUltimo(): void{
    this.resultado = this.resultado.slice(0, -1);
  }

  borrarTodo():void{
    this.resultado = "";
  }

}
