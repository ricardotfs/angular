import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  constructor() { }

  @Input() items:CartItem;

  @Output() increaseQty = new EventEmitter<CartItem>();
  @Output() decreaseQty = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();
  
  ngOnInit() {
  }

  total(){
    return this.items.value();  
  }
  emitIncreaseQty(item:CartItem){
    this.increaseQty.emit(item);
  }
  emitDecreaseQty(item:CartItem){
    this.decreaseQty.emit(item);
  }
  emitRemove(item:CartItem){
    this.remove.emit(item);
  }
}
