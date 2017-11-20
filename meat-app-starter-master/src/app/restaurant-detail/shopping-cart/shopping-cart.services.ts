import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

export class ShoppingCartService{
    itens:CartItem[] = []

    clear(){
        this.itens = []
    } 
    
    addItme(item:MenuItem){
        let foundItem = this.itens.find((mItem) => mItem.menuItem.id == item.id)
        if(foundItem){
            foundItem.quantity = foundItem.quantity + 1
        }else{
            this.itens.push(new CartItem(item))
        }
    }

    remove(item:CartItem){
        this.itens.splice(this.itens.indexOf(item),1);
    }

    total():number{
        return this.itens
        .map(i=> i.value())
        .reduce((prev,value )=>prev + value,0)
    }
}