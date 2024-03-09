import {Component, OnInit} from '@angular/core';
import {ProductComponent} from "../product/product.component";
import {CommonModule} from "@angular/common";
import {ApiServiceService} from "../../services/api-service.service";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
constructor(private ApiService:ApiServiceService) {
}
products:any=[]

  onProductOutput(product:any){
   console.log(product,"output")
  }

editProduct(id:number ,product:any){
  this.ApiService.editProduct(id,product).subscribe({
    next:data=>{
      console.log(data);
    },
    error:err => {
      console.log(err)
  }
  })
}
ngOnInit(){
  this.ApiService.getAllDbProducts().subscribe({
    next:data =>{
      this.products=data;
      console.log(data);
    },
    error:err => {
      console.log(err);
    }
  })



}


}
