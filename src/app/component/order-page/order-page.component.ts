import { Component } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order-page',
  imports: [],
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css'
})
export class OrderPageComponent {
  public totalamount:number=0;
  constructor(private api:ApiService, private router:Router){}
  ngOnInit(){
    setTimeout(()=>{
      this.router.navigate(["/"]);
      this.api.removeallitems()
    },10000);
   //totalamount coming from api
   this.totalamount=this.api.calculateprice();

  }

}
