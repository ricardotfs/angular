import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {ActivatedRoute} from '@angular/router'
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';


@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor(private rest:RestaurantsService,
    private router:ActivatedRoute) { }

    menu:Observable<MenuItem[]>

  ngOnInit() {
    this.menu = this.rest.menuOfRestaurantMenuItem(this.router.parent.snapshot.params['id'])
  }

  addMenuItem(item:MenuItem){
    console.log(item)
  }
}
