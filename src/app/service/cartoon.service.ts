import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cartoon } from '../model/cartoon';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CartoonService {
  
private cartoonsUrl: string;

  constructor(private http: HttpClient) {
    this.cartoonsUrl = 'http://localhost:8080/cartoons';
  }

  public findAll(): Observable<Cartoon[]> {
    return this.http.get<Cartoon[]>(this.cartoonsUrl);
  }

  public save(cartoon: Cartoon) {
    return this.http.post<Cartoon>(this.cartoonsUrl, cartoon);
  }
}
