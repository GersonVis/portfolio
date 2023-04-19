import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './components/chat/chat.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ListchatComponent } from './components/listchat/listchat.component';




@NgModule({
  declarations: [
    ChatComponent,
    SidebarComponent,
    ListchatComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ChatModule { }
