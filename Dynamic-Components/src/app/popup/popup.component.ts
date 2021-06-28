import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Input() message: string = '';
  @Output() closePopup = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  onClose() {
    this.closePopup.emit();
  }
}
