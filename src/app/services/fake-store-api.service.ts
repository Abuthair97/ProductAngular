import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FakeStoreApiService {

  constructor(private httpClint:HttpClient) { }

  getAllProduct(){
    return this.httpClint.get("https://fakestoreapi.com/products")
  }

}
