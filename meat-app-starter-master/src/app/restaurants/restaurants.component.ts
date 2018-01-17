import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/SwitchMap'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/catch'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations:[
    trigger('toggleSearch',[
    state('hidden',style({
      opacity:0,
      "max-height":"0px",
    })),
    state('visible',style({
      opacity:1,
      "max-height":"70px",
      "margin-top":"20px",
    })),
    transition("* => *",animate("250ms 0s ease-in-out"))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  searchBarState = 'hidden';
  searchForm:FormGroup;
  searchControl:FormControl;

  constructor(private restaurantsService:RestaurantsService,
  private fb:FormBuilder) { }

  restaurats:Restaurant[]

  ngOnInit() {
    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })
    this.searchControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(cliDigitando => this.restaurantsService.restaurants(cliDigitando))
      .catch(erro=> Observable.from([]))
      .subscribe(rest => this.restaurats = rest);

     this.restaurantsService.restaurants()
     .subscribe(rest => this.restaurats = rest)
  }
  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden'? 'visible':'hidden';
  }
}
