import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Order } from 'app/order/order.model';
import { Observable } from 'rxjs/Observable';
import {Headers,RequestOptions, Http} from '@angular/http';
import  {MEAT_API} from 'app/app.api'
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.services';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService{
    constructor(
        private cartService:ShoppingCartService,
        private http:Http)
        {

        }

    checkOrder(order:Order):Observable<string>{
        const headers = new Headers();
        headers.append('Content-Type','application/json');

        return this.http.post(`${MEAT_API}/orders`,
                            JSON.stringify(order),
                            new RequestOptions({headers:headers}))
                            .map(response=> response.json())
                            .map(order => order.id);
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