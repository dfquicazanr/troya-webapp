import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-text-box',
  templateUrl: './input-text-box.component.html',
  styleUrls: ['./input-text-box.component.scss']
})
export class InputTextBoxComponent implements OnInit {

  @Input() text: string;
  @Output() textChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  updateText(value) {
    this.text = value;
    this.textChange.emit(this.text);
  }

}
