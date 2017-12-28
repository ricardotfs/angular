import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";
import { Injectable } from "@angular/core";
import { Notification } from "rxjs/Notification";
import { NotificationServices } from "app/shared/messages/notification.services";

@Injectable()
export class ShoppingCartService{
    itens:CartItem[] = []
    constructor(private notificationsServices:NotificationServices){

    }
    clear(){
        this.itens = []
    } 
    
    inscreaseQty(item:CartItem){
        item.quantity = item.quantity + 1;
    }
    decreaseQty(item:CartItem){
        item.quantity = item.quantity - 1;
        if(item.quantity === 0){
            this.remove(item);
        }
    }
    addItme(item:MenuItem){
        let foundItem = this.itens.find((mItem) => mItem.menuItem.id === item.id)
        if(foundItem){
            foundItem.quantity = foundItem.quantity + 1
        }else{
            this.itens.push(new CartItem(item))
        }
        this.notificationsServices.notify(`Você adicionou o item ${item.name}`);
    }

    remove(item:CartItem){
        this.itens.splice(this.itens.indexOf(item),1);
        this.notificationsServices.notify(`Você adicionou o item ${item.menuItem.name}`);
        
    }

    total():number{
        return this.itens
        .map(i=> i.value())
        .reduce((prev,value )=>prev + value,0)
    }
}