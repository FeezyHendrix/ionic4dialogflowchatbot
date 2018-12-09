import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const Pusher: any;


@Injectable({
  providedIn: 'root'
})
export class PusherService {
  public _pusher: any;

  constructor(public http: HttpClient) {
    this._pusher = new Pusher('a18c3dadaaf9cb21e5f9', {
      cluster: 'eu',
      encrypted: true
    });
  }


  public getPusher() {
    return this._pusher;
  }
}
