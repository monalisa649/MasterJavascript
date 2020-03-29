import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { routing, appRoutingProviders } from './app.rounting';

import { AppComponent } from './app.component';
import { TennisComponent } from './components/tennis/tennis.component';
import { ZapatillaComponent } from './components/zapatilla/zapatilla.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TennisComponent,
    ZapatillaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
