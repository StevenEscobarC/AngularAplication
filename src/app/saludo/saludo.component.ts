import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  mensaje: string;
  identifParrafo: string;
  identifInput: string;

  constructor() { 
    this.mensaje = 'Un saludo a todos';
    this.identifParrafo = 'parrafoPrincipal';
    this.identifInput = 'text';

    //función anónima
    setTimeout(() => {  
      this.mensaje = 'Otro mensaje diferente';
      this.identifParrafo = 'main';
      this.identifInput = 'password';
    }, 3000)
  }

  ngOnInit(): void {
  }

  mostrarSaludo(): string{
    return 'Saludo desde el método';
  }

}
