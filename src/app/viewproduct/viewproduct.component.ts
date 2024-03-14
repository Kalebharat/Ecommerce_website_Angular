import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { productData } from '../productModel';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
constructor(private ser:ApiService){}

products:productData[]=[];

ngOnInit(){
  this.getData();
}
getData(){
this.ser.getproduct().subscribe((data:any)=>{
  console.log(data);
  // alert('successful add data..');
  this.products=data;
})
}

delproduct(id:number){
  this.ser.deleteproduct(id).subscribe((data)=>{
    alert('are you sure ...')
    console.log(data)
    window.location.reload()
  })

}
}
