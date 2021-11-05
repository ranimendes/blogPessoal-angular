import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private rota: Router
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      this.rota.navigate(['/entrar'])
    }
  }

}
