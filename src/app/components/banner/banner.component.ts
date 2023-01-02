import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/porfolio/portfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  //inicializar variables de instancias
  nombre: string= '';
  apellido: string= '';
 
  constructor(
    // Inyectar el Servicio para tener acceso en la clase a los Métodos
    private portfolioService: PortfolioService) { }

  ngOnInit(): void {
this.portfolioService.getDatos(). subscribe(data => {

//Definir información a mostrar
this.nombre=data.nombre;
this.apellido=data.apellido;
});


  }

}
