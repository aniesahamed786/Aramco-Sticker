import { Directive } from '@angular/core';
import {  ElementRef, HostListener, Input , Output, EventEmitter} from '@angular/core';
@Directive({
  selector: '[appSearchemp]'
})
export class SearchempDirective {
  @Output() sendData: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

}
