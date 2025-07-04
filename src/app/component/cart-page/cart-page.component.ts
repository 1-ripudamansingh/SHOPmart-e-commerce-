import { Component } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { NgFor, NgIf } from '@angular/common';
import { product } from '../product-view/productmodal';
import { RouterLink } from '@angular/router';
import {  FormGroup,Validators,FormControl,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-page',
  imports: [NgFor,ReactiveFormsModule ,NgIf,RouterLink],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  showproduct:any=[];
  public totalamount:number=0;
  public addressform=false;
  myform = new FormGroup({
    name:new FormControl ('',Validators.required),
    email:new FormControl ('',Validators.required),
    mobile:new FormControl ('',Validators.required)
  })
  constructor(private api:ApiService){}
  ngOnInit(){
    this.api.products().subscribe((res)=>{
      this.showproduct = res;
      this.totalamount=this.api.calculateprice();
      console.log("total amountmmm is",this.totalamount)
    })
    //form
    
  }
  deletitem(item:product){
      this.api.removecartitem(item);
  }
  Empty(){
    this.api.removeallitems()
  }
  cancle(){
    this.addressform=false;
    //this.myform.reset()
    this.myform.reset();
  }
  onsubmit(){
    
    console.log(this.myform);
    this.myform.reset();
    console.log(this.myform);
    console.log('subbbbbbbbbb');
    
  }

}
