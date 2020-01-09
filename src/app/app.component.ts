import {Component, OnInit} from '@angular/core';
import {AylienService} from './services/aylien.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  newsUrl = 'http://techcrunch.com/2015/07/16/microsoft-will-never-give-up-on-mobile';
  analysis: object;

  constructor(private aylienService: AylienService) {
  }


  ngOnInit(): void {
    // @ts-ignore
    this.aylienService.classify(this.newsUrl)
      .subscribe(response => this.analysis = response);
  }
}
