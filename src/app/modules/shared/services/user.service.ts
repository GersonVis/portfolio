import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/app/environments/environment";



const base_uri = environment.base_uri
@Injectable(
    {
        providedIn: 'root'
    } 
)
export class UserService{
    constructor(private http: HttpClient){

    }
    /**
     * 
     * @param data { "email": "correo@gmail.com"  }
     * @returns 
     */
    saveUser(data: any){
        let endpoint = `${base_uri}/user/insert`
        return this.http.post(endpoint, data)
    }
}