import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITruck } from '../interfaces/truck.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrucksLoaderService {

  constructor(
    private http: HttpClient
  ) { }

  load(): Observable<ITruck[]> {
    return this.http.get<ITruck[]>(environment.endpoints.trucks);
  }
}
