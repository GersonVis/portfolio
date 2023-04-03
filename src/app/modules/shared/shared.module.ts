import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessageComponent } from './components/message/message.component';


@NgModule({
  declarations: [
    SidenavComponent,
    ToolbarComponent,
    MessageComponent,
    
  ],
  exports:[
    SidenavComponent,
    ToolbarComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule
    
  ]
})
export class SharedModule { }
