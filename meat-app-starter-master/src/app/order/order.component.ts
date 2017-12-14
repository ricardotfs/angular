import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/radio/radio-option.model';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { OrderService } from 'app/order/order-services';
import { Order,OrderItem } from 'app/order/order.model';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder} from '@angular/forms'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  constructor(private orderService:OrderService,
              private router:Router,
              private formBuilder:FormBuilder) 
              { }

  delivery:number = 8;
  orderForm:FormGroup;

  paymentOptions:RadioOption[]=[
    {label:'Dinheiro',value:'MON'},
    {label:'Cartão de Debito',value:'DEB'},
    {label:'Cartão de Refeição',value:'REF'},  
  ]

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name:  this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      emailConfirmation: this.formBuilder.control(''),
      address:this.formBuilder.control(''),
      number:this.formBuilder.control(''),
      optionalAddress:this.formBuilder.control(''),
      paymentOption:this.formBuilder.control('')
    });
  }

  itemsValue():number{
    return this.orderService.itemsValue();
  }
  cartItems():CartItem[]{
    return this.orderService.cartItems();
  }
  
  increaseQty(item:CartItem){
    this.orderService.increaseQty(item);
  }
  decreaseQty(item:CartItem){
    this.orderService.decreaseQty(item);
  }

  remove(item:CartItem){
    this.orderService.remove(item);
  }
  checkOrder(order:Order){
  order.orderItems = this.cartItems()
    .map((item:CartItem)=> new OrderItem(item.quantity,item.menuItem.id));
    this.orderService.checkOrder(order)
    .subscribe((orderId:string)=>{
      this.router.navigate(['/order-summary'])
      console.log(`Compra concluida: ${orderId}`);      
      this.orderService.clear();
    });
    console.log(order);
  }
}
