import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './secciones/inicio/inicio.component';
import { ProductosComponent } from './secciones/productos/productos.component';
import { AcercadeComponent } from './secciones/acercade/acercade.component';
import { InfoComponent } from './secciones/info/info.component';
import { ServiciosComponent } from './secciones/servicios/servicios.component';

const routes: Routes = [
  {
    path:" ", component:InicioComponent
  },
  {
    path : "inicio" , component:InicioComponent
  },
  {
    path:"servicios",component:ServiciosComponent
  },
  {
    path:"productos",component:ProductosComponent
  },
  {
    path:"acerca",component:AcercadeComponent
  },
  {
    path:"info",component:InfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
