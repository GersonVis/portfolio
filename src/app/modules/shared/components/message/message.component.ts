import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit{
   count$: Observable<number>

   isVisible: Boolean = true
   showMessages(event: any){
    this.isVisible=false
   }
   constructor(private store: Store<{ messageSend: number }>){
      this.count$ = store.select('messageSend');
      console.log(this.count$)
   }
  ngOnInit(): void {
    this.count$ = this.store.select('messageSend');
  }
}
