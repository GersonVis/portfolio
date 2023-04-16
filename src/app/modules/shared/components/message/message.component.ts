import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Prueba } from '../../reducers/home/home.model';
import { getDate, getEmail, getMessage, getVisible } from '../../reducers/home/home.selector';




@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {


  message$: Observable<String> = new Observable<String>
  email$: Observable<String> = new Observable<String>
  visible$: Observable<boolean> = new Observable<boolean>
  date$: Observable<Date> = new Observable<Date>

  isVisible: Boolean = true
  showMessages(event: any) {
    this.isVisible = false
  }

  constructor(private store: Store<{ messageSend: Prueba }>) {
    this.redux()
  }
  ngOnInit(): void {
    this.redux()
  }
  redux() {
    this.message$ = this.store.select(getMessage);
    this.email$ = this.store.select(getEmail);
    this.visible$ = this.store.select(getVisible);
    this.date$ = this.store.select(getDate)
  }
}
