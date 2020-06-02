import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) { }

  getMessage() {
    return this.socket
      .fromEvent("customer").pipe(
        map(data => {
          // console.log('data notification : ', data)
          return data;
        }, error => {
          console.log('An Error Occured !', error.getMessage);
        }));
  }

  getMessageAdmin(){
    return this.socket
      .fromEvent("customer").pipe(
        map(data => {
          console.log('data notification admin: ', data)
          return data;
        }, error => {
          console.log('An Error Occured !', error.getMessage);
        }));
  }
  disconnect(){
    return this.socket.disconnect();
  }

  connect(){
    return this.socket.connect();
  }

  
}
