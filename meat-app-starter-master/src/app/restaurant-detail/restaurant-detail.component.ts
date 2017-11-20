import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
})
export class RestaurantDetailComponent implements OnInit {

  restaurant:Restaurant

  constructor(private restaurantsService:RestaurantsService
  ,private router:ActivatedRoute) { 

  }

  ngOnInit() {
    this.restaurantsService.restaurantById(this.router.snapshot.params['id'])
    .subscribe(rest => this.restaurant = rest)
  }

}
