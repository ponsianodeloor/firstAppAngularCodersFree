import { Component } from '@angular/core';
import { MessagesService } from '../../services/messages/messages.service';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css']
})
export class CreateMessageComponent {

    message: string = '';

    constructor(public messagesService: MessagesService) { }

    addMessage() {
      this.messagesService.add(this.message);
      this.message = '';
    }
}
