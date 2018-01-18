import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Order } from 'app/order/order.model';
import {HttpClient} from '@angular/common/http';
import  {MEAT_API} from 'app/app.api'
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.services';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map"


@Injectable()
export class OrderService{
    constructor(
        private cartService:ShoppingCartService,
        private http:HttpClient)
        {

        }

    checkOrder(order:Order):Observable<string>{
        return this.http.post<Order>(`${MEAT_API}/orders`,order).map(order => order.id);
    }

    itemsValue():number{
        return this.cartService.total();
      }

    cartItems():CartItem[]{
        return this.cartService.itens;
    }

    increaseQty(item:CartItem){
        this.cartService.inscreaseQty(item);
    }
    decreaseQty(item:CartItem){
        this.cartService.decreaseQty(item);
    }
    remove(item:CartItem){
        this.cartService.remove(item);
    }

    clear(){
        this.cartService.clear();
    }
}