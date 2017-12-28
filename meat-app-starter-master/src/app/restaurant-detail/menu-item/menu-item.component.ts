import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';
import {Observable} from 'rxjs/Rx';
import {ActivatedRoute} from '@angular/router'
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { trigger, state, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations:[
    trigger('menuItemAppeared',[
    state('ready',style({opacity:1})),
    transition('void => ready',[
    style({opacity:0,transform:'translateY(-20px)'}),
    animate('300ms 0s ease-in')
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  menuItemState = 'ready'
  @Input() menuItem: MenuItem
  @Output() add = new EventEmitter()

  constructor(private rest:RestaurantsService,
    private router:ActivatedRoute) { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.add.emit(this.menuItem)
  }

}
