import { Component,Input,Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-jornal',
  templateUrl: './jornal.component.html',
  styleUrls: ['./jornal.component.css']
})
export class JornalComponent {
  @Output() returnTerminal: EventEmitter<any> = new EventEmitter();

  constructor() {}

  return() {
    this.returnTerminal.emit();
  }
}
