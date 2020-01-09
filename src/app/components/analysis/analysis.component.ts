import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

  @Input() analysis: any;

  constructor() { }

  ngOnInit() {
  }

}
