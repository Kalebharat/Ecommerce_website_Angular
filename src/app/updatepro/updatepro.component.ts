import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { productData } from '../productModel';

@Component({
  selector: 'app-updatepro',
  templateUrl: './updatepro.component.html',
  styleUrls: ['./updatepro.component.css']
})
export class UpdateproComponent implements OnInit {
  prodata:any;
public product:productData={} as productData
  constructor(private sb:ApiService,private acti:ActivatedRoute,private rout:Router){}

  ngOnInit(){
    this.acti.paramMap.subscribe((param:Params)=>{
      this.prodata=param['get']('id');
      console.log('id is',this.prodata);
      
    })
    this.sb.getId(this.prodata).subscribe((data:any)=>{
      this.product=data;
      console.log(this.product);
      
    })
  }
  update(){
    this.sb.updateproduct(this.product,this.prodata).subscribe((data:any)=>{
      this.rout.navigate(['/Viewproduct'])
    })
  }
}
