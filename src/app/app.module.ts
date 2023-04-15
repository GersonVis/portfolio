import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './modules/main/main.module';
import { StoreModule } from '@ngrx/store';
import { homeReducer } from './modules/shared/reducers/home/home.reducer';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ messageSend: homeReducer }),
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
