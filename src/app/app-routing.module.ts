import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { UpdateproComponent } from './updatepro/updatepro.component';

const routes: Routes = [
  {
    path:'',component:AddProductComponent
  },
  {
    path:'Viewproduct', component:ViewproductComponent
  },
  {
    path:'update/:id',component:UpdateproComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
