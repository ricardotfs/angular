import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.services';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService:ShoppingCartService) {

   }

  ngOnInit() {
  }

  items():any[]{
    return this.shoppingCartService.itens;
  }

  total():number{
    return this.shoppingCartService.total();
  }
  clear(){
      this.shoppingCartService.clear();
  }
  
  removeItem(item:any){
    this.shoppingCartService.remove(item);
  }

  addItem(item:any){
    this.shoppingCartService.addItme(item);
  }

}
