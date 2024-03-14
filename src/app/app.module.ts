import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import{HttpClientModule} from '@angular/common/http';
import { UpdateproComponent } from './updatepro/updatepro.component'

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ViewproductComponent,
    UpdateproComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
