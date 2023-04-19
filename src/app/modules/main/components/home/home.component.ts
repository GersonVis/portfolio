import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { MessageService } from 'src/app/modules/shared/services/message.service';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';


import { setData, setVisible } from 'src/app/modules/shared/reducers/home/home.actions';
import { Prueba } from 'src/app/modules/shared/reducers/home/home.model';
import { UserService } from 'src/app/modules/shared/services/user.service';
import { UserMessageService } from 'src/app/modules/shared/services/usermessage.service';
import { IUserMessage } from 'src/app/modules/shared/models/usermessage.model';
import { IMessage } from 'src/app/modules/shared/models/message.model';
import { IUser } from 'src/app/modules/shared/models/user.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userMessage: IUserMessage 

  //reducer
  data$: Observable<Prueba>

  setData(data: any) {
    this.store.dispatch(setData({ email: data.email, message: data.message, date: new Date() }))
  }
  setVisible(data: any) {
    this.store.dispatch(setVisible({ visible: data.visible }))
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

  constructor(
    private userMessageService: UserMessageService,
    private messageService: MessageService, private form: FormBuilder,
    private store: Store<{ messageSend: Prueba }>,
    private userService: UserService) {

    this.chatForms = this.form.group({
      message: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    })
    this.data$ = store.select('messageSend');
    let message:IMessage = {
      id: 2,
      message: "",
      messagedate: new Date()
    } 
    let user: IUser ={
      user_id: 0,
      email: ""
    }
    this.userMessage={
      message: message,
      user_send: user,
      user_recv: user
    }
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
    let main = this
    let newData = {
      message: this.chatForms.get("message")?.value,
      email: this.chatForms.get("email")?.value
    }
    if (this.chatForms.status == "VALID") {
      this.saveUser({ email: newData.email }, function (response: any) {
        // console.log("response save user", response)
        main.resultSaveUser({ response: response, messageData: newData })
      })
    }
  }
  resultSaveUser(pass: any) {
    let header = pass.response.data.header
    let user = pass.resposne.data.data[0]
    if (header.state) {
      this.userMessage["user_send"]=user
      this.saveMessage({message: pass.messageData, user: user})
    }
  }

  showChargeSendMsg() {
    this.boolMessageSend = true
  }


  ngOnInit(): void {
    this.svgGlobal = document.getElementsByTagName('svg')[0]
    this.chargeMap(this.svgGlobal)
    this.inputNameWithJs = document.getElementById("nameUser")
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
  messageSendOk(data: any) {
    let main = this
    console.log("data any: ", data)
    setTimeout(function () {
      main.boolTextMsg = true
      console.log("data: ", data)
      main.setData({ email: data.email, message: data.message })
      main.setVisible({ visible: true })
    }, 100)
  }

  evtImgRun() {
    this.boolMessageSend = true
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

  //conections to services
  saveUser(data: any, doAfter: any) {
    this.userService.saveUser(data)
      .subscribe(data => {
        doAfter({ data: data })
      })

  }
  saveMessage(data: any) {
    let main = this
    this.showChargeSendMsg()
    this.messageService.setMessage(data.messageData).subscribe((response: any) => {
      let header = response.header
      let data = response.data[0]
      this.userMessage["message"]=data
      if (header.state) {
        this.userMessageService.saveUserMessage(this.userMessage).subscribe((response: any)=>{
            let header = response.header
            if(header.state){
              main.messageSendOk(data)
            }
        })
        
      }
    })
  }

}
export interface Response {
  header: any,
  data: any
}