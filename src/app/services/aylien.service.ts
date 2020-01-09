import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AylienService {

  private baseUrl = 'https://api.aylien.com/api/v1/';
  private headers = new HttpHeaders()
    .set('X-AYLIEN-TextAPI-Application-ID', '09a0e3fe')
    .set('X-AYLIEN-TextAPI-Application-Key', 'b0d62465795b2d643e3e13a348e995d4');

  constructor(
    private http: HttpClient,
  ) { }

  classify(newsUrl: string) {
    const endpointUrl = this.baseUrl + 'classify';
    return this.http.get(endpointUrl, {
        headers: this.headers,
        params: {
          url: newsUrl
        }
      }
    );
  }
}
