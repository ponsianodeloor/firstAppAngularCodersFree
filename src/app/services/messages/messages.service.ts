import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  //messages: string[] = ['Message 1', 'Message 2', 'Message 3'];
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

}
