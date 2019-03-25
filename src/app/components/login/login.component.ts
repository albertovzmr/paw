import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  dato : any;

  constructor() { }

  ngOnInit() {
    this.dato = 1.2
    this.aceptar (this.dato)
  }

  aceptar (valor: string) {
    this.dato = valor
  }

}
