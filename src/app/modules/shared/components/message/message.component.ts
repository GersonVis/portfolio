import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { state } from '@angular/animations';
import { DataHome } from '../../reducers/home/home.reducer';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit{
   count$: Observable<DataHome> = this.store.select(state=>state.messageSend)

   isVisible: Boolean = true
   showMessages(event: any){
    this.isVisible=false
   }
   constructor(private store: Store<{ messageSend: DataHome }>){
      this.count$ = store.select('messageSend');
      console.log(this.count$)
   }
  ngOnInit(): void {
    this.store.dispatch({ type: '[Home Component] SendOk' });
  }
}
