import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{
  toolbarStyle={
    "min-height": "100px",
    display: "flex",
    background: "white"
  }
  toolbarBaseVisible:boolean =true

  ngOnInit(): void {
   
  }
  
  toolbarOver(event: any){
    this.toolbarBaseVisible=false
  }
  toolbarOut(event: any){
   
  }
  
}
