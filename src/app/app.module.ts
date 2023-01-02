import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';




import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';




import { BannerComponent } from './components/banner/banner.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './components/modales/login/login.component';
import { RedesComponent } from './components/redes/redes.component';
import { ButtonloginComponent } from './components/buttonlogin/buttonlogin.component';


import { LogotextoComponent } from './components/modales/logotexto/logotexto.component';
import { ApplogoComponent } from './components/applogo/applogo.component';
import { ButtonbannerComponent } from './components/buttonbanner/buttonbanner.component';
import { ButtonfotologoComponent } from './components/buttonfotologo/buttonfotologo.component';
import { MbannerComponent } from './components/modales/mbanner/mbanner.component';
import { ButtonacercaComponent } from './components/buttonacerca/buttonacerca.component';
import { ButtoneducacionComponent } from './components/buttoneducacion/buttoneducacion.component';
import { ButtonproyectosComponent } from './components/buttonproyectos/buttonproyectos.component';
import { ButtoncontactoComponent } from './components/buttoncontacto/buttoncontacto.component';
import { IndexComponent } from './components/index/index.component';
import { ButtonlogoutComponent } from './components/buttonlogout/buttonlogout.component';
import { HeadermodificadoComponent } from './components/headermodificado/headermodificado.component';

import { HeaderiComponent } from './components/index/headeri/headeri.component';
import { AcercadeiComponent } from './components/index/acercadei/acercadei.component';
import { BanneriComponent } from './components/index/banneri/banneri.component';
import { EdicionComponent } from './components/edicion/edicion.component';
import { EducacioniComponent } from './components/index/educacioni/educacioni.component';
import { ProyectosiComponent } from './components/index/proyectosi/proyectosi.component';
import { ContactoiComponent } from './components/index/contactoi/contactoi.component';
import { ErrorComponent } from './components/error/error.component';



@NgModule({
  declarations: [
              AppComponent,
              AboutComponent,
              BannerComponent,
              EducacionComponent,
              ProyectoComponent,
              ContactoComponent,
              LoginComponent,
              RedesComponent,
              ButtonloginComponent,
              LogotextoComponent,
              ApplogoComponent,
              ButtonbannerComponent,
              ButtonfotologoComponent,
              MbannerComponent,
              ButtonacercaComponent,
              ButtoneducacionComponent,
              ButtonproyectosComponent,
              ButtoncontactoComponent,
              IndexComponent,
              ButtonlogoutComponent,
              HeadermodificadoComponent,
              HeaderiComponent,
              AcercadeiComponent,
              BanneriComponent,
              EdicionComponent,
              ButtonloginComponent,
              EducacioniComponent,
              ProyectosiComponent,
              ContactoiComponent,
              ErrorComponent,
              

                

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
