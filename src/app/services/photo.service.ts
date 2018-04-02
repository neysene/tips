import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PhotoService {

  constructor(private http: HttpClient) { }

  GetAPhoto() {
    return this.http.get('https://xkcd.com/info.0.json');
  }

}
