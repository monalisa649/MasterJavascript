import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { routing, appRoutingProviders } from './app.rounting';

import { AppComponent } from './app.component';
import { TennisComponent } from './components/tennis/tennis.component';
import { ZapatillaComponent } from './components/zapatilla/zapatilla.component';
import { HomeComponent } from './components/home/home.component';
import { ZapatillaService } from './services/zapatilla.service';
import { ExternoComponent } from './components/externo/externo.component';
import { PeticionService } from './services/peticion.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TennisComponent,
    ZapatillaComponent,
    HomeComponent,
    ExternoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders,
    ZapatillaService,
    PeticionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
