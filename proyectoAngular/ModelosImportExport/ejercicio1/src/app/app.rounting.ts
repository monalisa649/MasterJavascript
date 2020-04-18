//Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//importar componentes de la aplicación
import { HomeComponent } from './components/home/home.component';
import { TennisComponent } from './components/tennis/tennis.component';
import { ZapatillaComponent } from './components/zapatilla/zapatilla.component';
import { ExternoComponent } from './components/externo/externo.component';
import { ContactoComponent } from './components/contacto/contacto.component';


//Array de rutas

const appRoutes: Routes=[
 {path: 'home', component:HomeComponent},
 {path: 'tennis', component:TennisComponent},
 {path: 'zapatillas/:nombre', component:ZapatillaComponent},
 {path: 'zapatillas/:nombre/:edad', component:ZapatillaComponent},
 {path: 'externo', component:ExternoComponent},
 {path: 'contacto', component: ContactoComponent},
 {path:'**', component:HomeComponent },
];

//exportar el modulo del router

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

