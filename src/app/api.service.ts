import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productData } from './productModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postproduct(data:productData){
    return this.http.post("http://localhost:3000/Products",data);
  }
  getproduct(){
    return this.http.get('http://localhost:3000/Products');
  }

   deleteproduct(id:number){
    return this.http.delete('http://localhost:3000/Products/' + id)
   }

   updateproduct(data:productData,id:number){
    return this.http.put('http://localhost:3000/Products/'+id,data)
   }

   getId(id:string){
    return this.http.get('http://localhost:3000/Products/'+id)
   }
}
