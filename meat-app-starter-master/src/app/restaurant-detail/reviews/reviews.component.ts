import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import {Observable} from 'rxjs/Rx';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews:Observable<any>
  
  constructor(private rest:RestaurantsService,
    private router:ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.rest.reviewsOfRestaurant(this.router.parent.snapshot.params['id'])
  }

}
