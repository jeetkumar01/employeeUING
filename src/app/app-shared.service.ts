import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppSharedService {

  @Output() status: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  updateLoginStatus() {
    this.status.emit('true');
  }

  getEmittedValue() {
    return this.status;
  }
}
