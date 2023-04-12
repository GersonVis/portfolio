import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
   isVisible: Boolean = true
   showMessages(event: any){
    this.isVisible=false
   }
}
