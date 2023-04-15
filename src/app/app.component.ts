import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular';
  welcome = 'Seja Bem Vindo';
  terminal = {};
  loadingScreen = {};
  jornal = {};
  porcentage = ""
  porcentageBar = {}

  constructor() {}

  openJornal():void {
    this.terminal= {display:"none"}
    this.jornal = {display:"flex"}
  }

  loadingJornal():void {
    this.terminal={display:"none"}
    this.loadingScreen={display:"flex"}
    for (let index = -1; index < 101; index++) {
        setTimeout(() => {
            this.porcentage = String(index)
            console.log(index)
            if (index==100) {
                setTimeout(() => {
                    this.openJornal()
                    this.loadingScreen={display:"none"}
                }, 500);
            }
        }, 50*index);
    }
  }
  
  returnTerminal():void {
      this.terminal = {display:"flex"}
      this.jornal = {display:"none"}

  }
}
