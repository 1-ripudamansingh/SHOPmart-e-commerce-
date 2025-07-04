import { Component } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { product } from './productmodal';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-view',
  imports: [NgFor,RouterLink],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {
  data!:any | product[]
  constructor(private api:ApiService){}
  ngOnInit():void{
      this.displayproducts();
  }
  displayproducts(){
    this.api.getproduct().subscribe((res:any)=>{
      this.data=res;
      console.log(res)
    })
  }
  addtocart(item:product){
     this.api.addtocart(item);
  }
  removeitem(item:product){
    this.api.removecartitem(item);
  }

}
