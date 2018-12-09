import { Injectable } from '@angular/core';
import { PusherService } from './pusher.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {


  private _url = 'http://localhost:5000';

  private _channel: any;

  constructor(public http: HttpClient, private _pusher: PusherService) {
    this._channel = this._pusher.getPusher().subscribe('chat-bot');
  }



  public sendMessage( message: string): Observable<any> {
    const param = {
      type: 'human',
      message,
    };
    return this.http.post(`${this._url}/message`, param);
  }

  public getChannel() {
    return this._channel;
  }
}
