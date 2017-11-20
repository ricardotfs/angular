import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { RestaurantsService } from 'app/restaurants/restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  constructor(private restaurantsService:RestaurantsService) { }

  restaurats:Restaurant[]

  ngOnInit() {
     this.restaurantsService.restaurants()
     .subscribe(rest => this.restaurats = rest)
  }
}
