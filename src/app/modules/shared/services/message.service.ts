import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/app/environments/environment";


const base_url=environment.base_uri
@Injectable({
    providedIn: 'root'
  })
export class MessageService{
    constructor(private http: HttpClient){
    
    }
    getMessages(){
        const endPoint= `${base_url}/message/list`
        return this.http.get(endPoint)
    }
    setMessage(data: any){
        const endPoint = `${base_url}/message/insert`
        console.log(data)
        return this.http.post(endPoint, data)
    }
}