import { HttpClient } from '@angular/common/http';
import { Text } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }
  private dogBreedsUrl = 'https://dog.ceo/api/breeds/image/random/10';
  apiCall(breed:String)
  {
    return this.http.get<any>('https://dog.ceo/api/breed/' + breed + '/images/random')
  }
  getBreedsPic(): Observable<any> {
    return this.http.get<any>(this.dogBreedsUrl)
  }
}
