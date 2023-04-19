import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './main/main.component';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from '../chat/components/chat/chat.component';
import { SidebarComponent } from '../chat/components/sidebar/sidebar.component';
import { ListchatComponent } from '../chat/components/listchat/listchat.component';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    ChatComponent,
    SidebarComponent,
    ListchatComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    
  ]
})
export class MainModule { }
