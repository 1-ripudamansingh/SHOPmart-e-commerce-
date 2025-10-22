import { Component } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { RouterLink } from '@angular/router';
import { product } from '../product-view/productmodal';


@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public cartitems:number=0 ;
  constructor(private api:ApiService){}
  ngOnInit(){
    this.cartitems;
    this.api.products().subscribe((res:any)=>{
      this.cartitems=res.length;
    })
  }

}
