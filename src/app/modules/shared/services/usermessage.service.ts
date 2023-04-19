import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/app/environments/environment";


const base_uri = environment.base_uri

@Injectable({
    providedIn: 'root'
})
export class UserMessageService{
    constructor(private http: HttpClient){

    }
    saveUserMessage(data:any){
        let endpoint = `${base_uri}/message`
        return this.http.post(endpoint, data)
    }

}