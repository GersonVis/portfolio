import { Component, Input, OnInit } from '@angular/core';
import {menuOptions, MenuOption} from "../../constans/constantes-navegacion"

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{
  menuOptions: any
  anterior: any = null
  imOn: MenuOption 
  @Input() optionSelect=""
  constructor(){
    this.menuOptions=menuOptions
    this.imOn=menuOptions['inicio']
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
  
  ngOnInit(): void {
    this.menuOptions[this.optionSelect].active=true
    this.imOn=menuOptions[this.optionSelect]
  }
  
  toolbarOver(event: any){
    this.toolbarBaseVisible=false
  }
  toolbarOut(event: any){
    this.toolbarBaseVisible=true
  }
  optionClick(event: any){
    let item:any = event.currentTarget
    item.style.background="#D3DFE0"
    if(this.anterior){
      this.anterior.style.background=""
    }
    this.anterior=item
    
  }
  
}
