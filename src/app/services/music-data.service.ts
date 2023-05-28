import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicDataService {

  private baseUrl:string = "assets/videos-data.json";

  constructor(private http:HttpClient) { }

  get():Observable<any>{
    return this.http.get(this.baseUrl);
  }
}
