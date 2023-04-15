import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent {
  waring = {};

  @Output() loadingJornal: EventEmitter<any> = new EventEmitter();

  constructor() {}

  load() {
    this.waring={display:"none"}
    this.loadingJornal.emit();
  }

  terminalWaring():void {
    this.waring={opacity:"1"}
    setTimeout(() => {
        this.waring={paddingLeft:"10px",opacity:"1"}
    }, 100);
    setTimeout(() => {
        this.waring={paddingLeft:"0px",opacity:"1"}
    }, 200);
  }
}
