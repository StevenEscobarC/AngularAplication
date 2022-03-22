import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  mensaje: string;

  constructor() {
    this.mensaje = 'Este es el mensaje inicial';
  }

  ngOnInit(): void {
  }

  onClick($event): void {
    console.log('Botón pulsado')
    console.log($event)
  }

  onChange($event): void {
    console.log($event.target.value);
  }

  onMouseEnter(): void {
    this.mensaje = 'Estoy dentro del div';
  }

  onMouseOut(): void {
    this.mensaje = 'Estoy fuera del div';
  }

  onChangeInput($event): void {
    //console.log($event.target.value);
  }

  onInput($event): void {
    //console.log($event.target.value)
    this.mensaje = $event.target.value;
  }

  onFocus($event): void {
    console.log('Recibe el foco');
  }

  onBlur($event): void {
    console.log('Pierde el foco');
  }

}
