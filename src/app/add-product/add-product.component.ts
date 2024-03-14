import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { productData } from '../productModel';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private sb:ApiService ,private rout:Router){}

  ngOnInit(){
  }
  getdata(data:productData){
    console.log(data);
    alert('data add in server...');
    this.sb.postproduct(data).subscribe((db)=>{
      console.log(db)
      this.rout.navigate(['/Viewproduct'])
    })
  }
}
