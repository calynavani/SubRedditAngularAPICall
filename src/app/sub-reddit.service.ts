import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubRedditServiceService {
  
  constructor(private http: HttpClient) { }

  DisplaySubReddit(): Observable<any>{
    let urlBase: string = "https://www.reddit.com/r/aww/.json";

    let result: Observable<any> = this.http.get(urlBase);
    return result;
  }

  FindSubReddit(SubReddit: string): Observable<any>{
    let url: string = `https://www.reddit.com/r/${SubReddit}/.json`;
    console.log(url);
    let result: Observable<any> = this.http.get(url);
    return result;
  }
}
