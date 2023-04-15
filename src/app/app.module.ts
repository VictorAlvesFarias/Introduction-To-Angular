import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerminalComponent } from './pages/terminal/terminal.component';
import { JornalComponent } from './pages/jornal/jornal.component';
import { LoadingScreenComponent } from './pages/loading-screen/loading-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    JornalComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
