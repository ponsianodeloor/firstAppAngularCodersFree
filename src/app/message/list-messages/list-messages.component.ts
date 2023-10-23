import { Component } from '@angular/core';
import { MessagesService } from '../../services/messages/messages.service';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent {

  constructor(public messagesService: MessagesService) { }

}

