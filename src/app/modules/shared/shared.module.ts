import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';


@NgModule({
  declarations: [
    SidenavComponent,
    ToolbarComponent,
  ],
  exports:[
    SidenavComponent,
    MaterialModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    
  ]
})
export class SharedModule { }
