import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  numero: number;
  constructor() {
    this.numero = 10;
  }

  ngOnInit(): void {
    
  }

  descontar(): void {
    let interval = setInterval(() => {
      this.numero--;
      if (this.numero === 0) {
        clearInterval(interval);
        setTimeout(()=>{
          this.numero = 10;
        }, 1000)
        
      }
    }, 1000)
  }

}
