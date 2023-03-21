import { Component, OnInit } from '@angular/core';
import {menuOptions, MenuOption} from "../../constans/constantes-navegacion"

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{
  menuOptions: any
  constructor(){
    this.menuOptions=menuOptions
    this.menuOptions["inicio"].active=true
  }
  toolbarStyle={
    "min-height": "100px",
    display: "flex",
    background: "white"
  }
  prueba(json: any): Array<any>{
     return Object.values(json)
  }
  toolbarBaseVisible:boolean = false
  
  ngOnInit(): void {

     console.log(menuOptions)
  }
  
  toolbarOver(event: any){
   
   // this.toolbarBaseVisible=false
  }
  toolbarOut(event: any){
    console.log("salio")
    //this.toolbarBaseVisible=true
  }
  optionClick(event: any){
    console.log(event)
    let item:any = event.currentTarget
    item.style.background="red"
  }
  
}
