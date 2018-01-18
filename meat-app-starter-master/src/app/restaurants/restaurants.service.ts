import { Restaurant } from "app/restaurants/restaurant/restaurant.model";
import{MEAT_API} from "../app.api"
import{HttpClient,HttpParams} from "@angular/common/http"
import { ErroHandler } from "app/app.erro.handler";
import "rxjs/add/operator/map"
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class RestaurantsService{
    
    constructor(private http:HttpClient){}
      restaurants(search?:string):Observable<Restaurant[]>{
        let params: HttpParams = undefined;
        if(search){
          params = new HttpParams().set('q',search);
        }
          return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`,{params:params})
      }

      restaurantById(id:string):Observable<Restaurant>{
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
      }

      reviewsOfRestaurant(id:string):Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      }
      menuOfRestaurantMenuItem(id:string):Observable<MenuItem[]>{
        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
      }
}