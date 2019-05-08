import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() percent: number = 50;

  @Output() changeValue: EventEmitter<number> = new EventEmitter();


  constructor() {}

  ngOnInit() {
  }

  disminuir() {
    if (!(this.percent <= 0)) {
      this.percent -= 5;
    } else {
      this.percent = 0;
    }
    this.txtProgress.nativeElement.focus();
    this.changeValue.emit( this.percent )
  }

  incrementar() {
    if (!(this.percent >= 100)) {
      this.percent += 5;
    } else {
      this.percent = 100;
    }
    this.txtProgress.nativeElement.focus();
    this.changeValue.emit( this.percent )
  }

  onChanges( value: number ) {

    // let elemHtml: any = document.getElementsByName('progreso')[0];

    if ( value >= 100 ) {
      this.percent = 100;
    } else if( value <= 0 ){
      this.percent = 0
    } else {
      this.percent = value;
    }

    this.txtProgress.nativeElement.value = this.percent;

    this.changeValue.emit( this.percent );
  }

}
