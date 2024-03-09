import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient:HttpClient) {
  }

  getAllDbProducts(){
    return this.httpClient.get(`${environment.apiUrl}/Products`)
  }

  editProduct(id:any,product:any){
    return this.httpClient.put("${environment.apiUrl}/Products/"+id,id,product);
  }
}
