import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  svgGlobal: any
  countriesOn: Array<any> = []
  infoRectBoolean: boolean = false
  categoryForms: FormGroup
  @ViewChild('rectInfo') rectInfo: any
  @ViewChild('btnSend') btnSend: any
  @ViewChild('inputMessage') inputMessage: any
  @ViewChild('inputEmail') inputEmail: any

  inputNameWithJs: any
  inputNameData: any={
    style:{
      inactive:  "visibility: hidden; width: 0px"
    },
    classBoolean: {
      active: false
    }
  }
  inputContentNameData: any={
    style:{
      inactive:  "visibility: hidden; width: 0px"
    },
    classBoolean: {
      active: false
    }
  }

  constructor(private form: FormBuilder) {
     this.categoryForms = this.form.group({
       message: ['', Validators.required],
       email: ['', Validators.required, Validators.email],
     })
     
  }
  
  //events
  evtFocusMesage(event: any){
      this.inputContentNameData.classBoolean.active=true
      
      if(this.inputEmail.nativeElement.value==""){
        this.inputEmail.nativeElement.focus()
      }
  }

  clickSend(evt: any){
   let data = {
      message: this.categoryForms.get("message")?.value,
      email: this.categoryForms.get("email")?.value
    }
    console.log(data)
  }
  ngOnInit(): void {
    this.svgGlobal = document.getElementsByTagName('svg')[0]
    this.chargeMap(this.svgGlobal)
    this.inputNameWithJs=document.getElementById("nameUser")
  }
  optionMenu: string = "inicio"
  chargeMap(svg: any) {
    let items = [...svg.children]
    items.forEach(element => {
      this.eventsSVG(element)
    });
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
