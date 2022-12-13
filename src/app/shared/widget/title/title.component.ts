import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Title } from '../../interfaces/title';


@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {

  @Input('data') data : any;
  @Output() eventButton?: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
   }

  eventClick($event: any): void {
    if (this.data.isVisibleButton) {
      //this.eventButton.emit($event);
    }
  }


}
