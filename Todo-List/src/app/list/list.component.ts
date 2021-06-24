import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() item: string = '';
  @Input() id: number = 0;
  @Input() state: string = '';
  @Output() index = new EventEmitter<{ index: number; action: string }>();
  constructor() {}

  ngOnInit(): void {}

  onComplete() {
    this.index.emit({ index: this.id, action: 'complete' });
  }
  onDelete() {
    this.index.emit({ index: this.id, action: 'delete' });
  }
}
