import { Component } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { ActivatedRoute,} from '@angular/router';
import { NgIf } from '@angular/common';
import { product } from '../product-view/productmodal';

@Component({
  selector: 'app-product-detail',
  imports: [NgIf],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  productdata:any;
  showadd:boolean=true;
  showremove:boolean=false;
  constructor(private api:ApiService,private activatedroute:ActivatedRoute){}
  ngOnInit():void{
    let productid= this.activatedroute.snapshot.paramMap.get("productid");
    //console.log("product id is",productid)
    productid && this.api.getproductbyid(productid).subscribe((res:any)=>{
      this.productdata = res;
      console.log(res);
    })
  }

  addtocart(productdata:product){
      this.showadd=false;
      this.showremove=true;
      this.api.addtocart(productdata);
  }

  removeitem(productdata:product){
    this.showadd=true;
    this.showremove=false;
    this.api.removecartitem(productdata)

  }


}
