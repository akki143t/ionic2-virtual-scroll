import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class RemoteServiceProvider {

  getApiUrl : string = "https://www.reddit.com/r/worldnews/.json";

  constructor(public http: HttpClient) {
    console.log('RemoteServiceProvider Provider Started');
  }

  public getPosts() {
    return  this.http.get(this.getApiUrl)
    .map((res: any) => res.data.children);
  }
}
