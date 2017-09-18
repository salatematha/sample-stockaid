import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import * as io from 'socket.io-client';

@Injectable()
export class WebSocketsService {



  private url = 'https://ws-api.iextrading.com/1.0/tops';
  private socket;

  sendMessage(message) {
    this.socket.emit('subscribe', message);
    console.log(message);
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        console.log(data);
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }
}