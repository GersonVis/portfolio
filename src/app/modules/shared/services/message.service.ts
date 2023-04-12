import { HttpClient } from "@angular/common/http";
import { environment } from "src/app/environments/environment";


const base_url=environment.base_uri
export class MessageService{
    constructor(private http: HttpClient){
    
    }
    getMessages(){
        const endPoint= `${base_url}/message/list`
        return this.http.get(endPoint)
    }
}