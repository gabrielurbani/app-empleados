import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  @Input() e:Empleado; 
  @Input() i:number;
  constructor() { }

  ngOnInit(): void {
  }
  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracterstica: string) {
    this.arrayCaracteristicas.push(nuevaCaracterstica);
  }
}
