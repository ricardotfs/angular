import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';
import {Observable} from 'rxjs/Rx';
import {ActivatedRoute} from '@angular/router'
import { RestaurantsService } from 'app/restaurants/restaurants.service';


@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

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
