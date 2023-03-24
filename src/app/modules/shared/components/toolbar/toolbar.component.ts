import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import {menuOptions, MenuOption} from "../../constans/constantes-navegacion"


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{
  

  menuOptions: any
  anterior: any = null
  imOn: MenuOption = {
    name: "",
    title: "",
    path:"",
    active: true,
    info: "",
    img: ""
  }
  evtToolbarClose: any = null
  contentOption: any = {} 
  @Input() optionSelect=""



  varAnimation: any={
    toolbarHide: true,
    timeHide: 450 
  }
  constructor(private renderer: Renderer2){
    this.menuOptions=menuOptions
   
  }
  ngOnInit(): void {
    this.menuOptions[this.optionSelect].active=true
    this.imOn=menuOptions[this.optionSelect]
    this.overOptionInfo(this.optionSelect)
  }
  overOptionInfo(optionSelect: string){
    let option: MenuOption = this.menuOptions[optionSelect]
    this.contentOption["img"]=option.img
    this.contentOption["title"]=option.title
    this.contentOption["info"]=option.info
  }
  selectOption(option: string){
    this.menuOptions[option].active=true
    
  }
  toolbarStyle={
    "min-height": "100px",
    display: "flex",
    background: "white"
  }
  prueba(json: any): Array<any>{
     return Object.values(json)
  }
  toolbarBaseVisible:boolean = true
  
  
  
  toolbarOver(event: any){
    this.showToolbar()
  }
  toolbarOut(event: any, toolBar: any){
    let item: any = event.currentTarget

    console.log(item.clientHeight)
    let height: number = parseInt(item.clientHeight)
    this.hiddenToolbar(item, height)
  }
  showToolbar(){
    this.varAnimation.toolbarHide=false
    this.toolbarBaseVisible=false
  }
  hiddenToolbar(toolBar: any, height: number){
    let main=this
    this.varAnimation.toolbarHide=true
    toolBar.style.height=height+"px"
    if(this.evtToolbarClose){
      clearTimeout(this.evtToolbarClose)
    }
    this.evtToolbarClose=setTimeout(function(){
      main.toolbarBaseVisible=true
      main.overOptionInfo(main.imOn.name)
    }, this.varAnimation.timeHide)
  }
  optionClick(event: any){
    let item:any = event.currentTarget
    item.style.background="#D3DFE0"
    if(this.anterior){
      this.anterior.style.background=""
    }
    this.anterior=item
    
  }
  overOption($event: any){
    
  }
  itemListOver(event: any){
    let item: any = event.currentTarget
    let optionName:string = item.attributes["item-name"].value
    this.overOptionInfo(optionName)
  }
  
}
