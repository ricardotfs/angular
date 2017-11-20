import { Restaurant } from "app/restaurants/restaurant/restaurant.model";
import{MEAT_API} from "../app.api"
import{Injectable} from "@angular/core"
import{Http} from "@angular/http"
import { ErroHandler } from "app/app.erro.handler";
import "rxjs/add/operator/map"
import {Observable} from 'rxjs/Rx';
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantsService{
    
    constructor(private http:Http){}
      restaurants():Observable<Restaurant[]>{
          return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json())
          .catch(ErroHandler.handlerErro)
      }

      restaurantById(id:string):Observable<Restaurant>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
        .map(response=> response.json())
        .catch(ErroHandler.handlerErro)       
      }

      reviewsOfRestaurant(id:string):Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map(response=> response.json())
        .catch(ErroHandler.handlerErro)   
      }
      menuOfRestaurantMenuItem(id:string):Observable<MenuItem[]>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
        .map(response=> response.json())
        .catch(ErroHandler.handlerErro)   
      }
}