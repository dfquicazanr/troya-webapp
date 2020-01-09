import {Component, OnInit} from '@angular/core';
import {AylienService} from './services/aylien.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  text = 'http://techcrunch.com/2015/07/16/microsoft-will-never-give-up-on-mobile';

  constructor(private aylienService: AylienService) {
  }


  ngOnInit(): void {
    this.aylienService.classify(this.text);
  }
}
