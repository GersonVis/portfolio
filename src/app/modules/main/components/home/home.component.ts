import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { MessageService } from 'src/app/modules/shared/services/message.service';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';


import { setData, setVisible } from 'src/app/modules/shared/reducers/home/home.actions';
import { Prueba } from 'src/app/modules/shared/reducers/home/home.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //reducer
  data$:Observable<Prueba>

  setData(data: any){
      this.store.dispatch(setData({email: data.email, message: data.message, date: new Date()}))
  }
  setVisible(data: any){
      this.store.dispatch(setVisible({visible: data.visible}))
  }



  //fin reducer
  
  boolMessageSend: boolean = false
  boolTextMsg: boolean = false
  svgGlobal: any
  countriesOn: Array<any> = []
  infoRectBoolean: boolean = false
  chatForms: FormGroup
  inputNameWithJs: any 

  @ViewChild('rectInfo') rectInfo: any
  @ViewChild('btnSend') btnSend: any
  @ViewChild('inputMessage') inputMessage: any
  @ViewChild('inputEmail') inputEmail: any
  @ViewChild('divMessageSend') divMessageSend: any
  
  inputNameData: any = {
    style: {
      inactive: "visibility: hidden; width: 0px"
    },
    classBoolean: {
      active: false
    }
  }

  inputContentNameData: any = {
    style: {
      inactive: "visibility: hidden; width: 0px"
    },
    classBoolean: {
      active: false
    }
  }
  inputEmailData: any = {
    style: {
      inactive: "visibility: hidden; width: 0px"
    },
    classBoolean: {
      active: {
        class: "active-email-data",
        state: false
      },
      invalidate: {
        class: "invalite-email",
        state: false
      }
    }
  }

  constructor(private messageService: MessageService, private form: FormBuilder,
    private store: Store<{ messageSend: Prueba }>) {

    this.chatForms = this.form.group({
      message: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    })
    this.data$ = store.select('messageSend');
  }
  toString(data: any): string {
    return data
  }
  //events
  evtFocusMesage(event: any) {
    this.inputContentNameData.classBoolean.active = true
    if (!this.validateEmail()) {
      this.inputEmail.nativeElement.focus()
    }
  }
  evtInputEmail(event: any) {
    this.validateEmail()
    // alert("pulsado")
  }
  validateEmail(): boolean {
    if (this.chatForms.get("email")?.errors) {
      this.inputEmailData.classBoolean.invalidate.state = true
      return false
    }
    this.inputEmailData.classBoolean.invalidate.state = false
    return true
  }
  emailInvalite() {

  }

  clickSend(evt: any) {
   
    let data = {
      content: this.chatForms.get("message")?.value,
      name: this.chatForms.get("email")?.value
    }
    
    if (this.chatForms.status == "VALID") {
      this.onSave(data)
    }
  }
  onSave(data: any){
     this.showChargeSendMsg()
     this.messageService.setMessage(data).subscribe( (response: any)=>{
      let header=response.header
      let data=response.data[0]
      console.log("response: ", data)
      if(header.state){
        this.messageSendOk({email: data.name, message: data.content})
      }
     })
  }
  showChargeSendMsg(){
    this.boolMessageSend=true
  }
  

  ngOnInit(): void {
    this.svgGlobal = document.getElementsByTagName('svg')[0]
    this.chargeMap(this.svgGlobal)
    this.inputNameWithJs = document.getElementById("nameUser")
    let dataHome= {
      message: "String",
      email: "sd",
      visible: true
    }
    
    
  }
  optionMenu: string = "inicio"
  chargeMap(svg: any) {
    let items = [...svg.children]
    items.forEach(element => {
      this.eventsSVG(element)
    });
  }
  //reducers
  //end reducers

  //visual functions
  messageSendOk(data: any){
    let main=this
    console.log("data any: ", data)
    setTimeout(function(){
      main.boolTextMsg=true
      console.log("data: ", data)
      main.setData({email: data.email, message: data.message})
      main.setVisible({visible: true})
    }, 100)
  }

  evtImgRun(){
    this.boolMessageSend=true
  }
  eventsSVG(item: any) {
    let main = this
    item.addEventListener("mouseover", function (evt: any) {
      main.overSVGMap(main, item)
    })
    item.addEventListener("mouseleave", function (evt: any) {
      main.infoRectBoolean = false
      main.leaveSVGMap(main, item)
    })
    item.addEventListener("mousemove", function (evt: any) {
      let x = evt.x + 5
      let y = evt.y - 20
      let htmlDirect = main.rectInfo.nativeElement
      htmlDirect.style.left = `${x}px`
      htmlDirect.style.top = `${y}px`

    })
  }
  overSVGMap(main: any, item: any) {
    let htmlDirect = main.rectInfo.nativeElement
    main.infoRectBoolean = true
    let name = item.attributes.name
    if (name) {
      htmlDirect.innerText = name.value
      return
    }
    let classItem = item.classList.value
    let classes = classItem.replaceAll(" ", ".")
    let itemsClass = document.documentElement.querySelectorAll(`.${classes}`)
    itemsClass.forEach((element: any) => {
      element.style.fill = "#c9c9c9"
    })
    htmlDirect.innerText = classItem
  }
  leaveSVGMap(main: any, item: any) {
    main.infoRectBoolean = false
    let name = item.attributes.name
    if (!name) {
      let classItem = item.classList.value
      let classes = classItem.replaceAll(" ", ".")
      let itemsClass = document.documentElement.querySelectorAll(`.${classes}`)
      itemsClass.forEach((element: any) => {
        element.style.fill = "#ececec"
      })
      return
    }
  }

}
export interface Response{
  header: any,
  data: any
}