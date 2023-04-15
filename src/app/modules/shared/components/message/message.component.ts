import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Prueba } from '../../reducers/models/scoreboard.model';
import { selectNombre } from '../../reducers/selectors/home.selector';

import { state } from '@angular/animations';
import { DataHome } from '../../reducers/home/home.reducer';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit{

 
   message$: Observable<String>


   isVisible: Boolean = true
   showMessages(event: any){
    this.isVisible=false
   }

   constructor(private store: Store<{ messageSend: Prueba }>){
        this.message$ = this.store.select(selectNombre);
   }
  ngOnInit(): void {
    this.store.select(selectNombre).subscribe((data)=>{
      console.log(data)
    })

  }
}
