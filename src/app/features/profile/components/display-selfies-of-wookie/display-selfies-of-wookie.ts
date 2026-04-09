import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Selfies } from '../../models/selfies';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-display-selfies-of-wookie',
  imports: [
    KeyValuePipe
  ],
  templateUrl: './display-selfies-of-wookie.html',
  styleUrl: './display-selfies-of-wookie.css',
})
export class DisplaySelfiesOfWookie {
  @Input() selfies: Selfies = [];
  @Output() deleteSelfieEvent = new EventEmitter<number>();


  deleteSelfie(selfieId: number): void {
    this.deleteSelfieEvent.emit(selfieId);
  }
}
