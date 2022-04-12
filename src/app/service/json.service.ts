import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from './config';

@Injectable()
export class JsonService {

  static count=0;

  constructor(private http: HttpClient) {
    JsonService.count++;
    console.log("JsonApiService.count",JsonService.count)
  }

  public fetch<T>(entity:string): Observable<T> {
    return this.http.get<T>(this.getBaseUrl() + config.FORM_URL + entity  + '.json');
  }
  private getBaseUrl() {
    return location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/'
  }

  public fetchStateDistrictList<T>(entity:string): Observable<T> {
    return this.http.get<T>(this.getBaseUrl() +"assets/data/" + entity  + '.json');
  }
}
