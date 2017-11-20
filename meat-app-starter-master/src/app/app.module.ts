import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'
import { ROUTES } from 'app/app.routes';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { MenuComponent } from 'app/restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from 'app/restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from 'app/restaurant-detail/menu-item/menu-item.component';
import { RestaurantDetailComponent } from 'app/restaurant-detail/restaurant-detail.component';
import { ReviewsComponent } from 'app/restaurant-detail/reviews/reviews.component';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.services';
import { OrderComponent } from './order/order.component';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    MenuComponent,
    ShoppingCartComponent,
    RestaurantDetailComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [RestaurantsService,ShoppingCartService, {provide:LOCALE_ID,useValue:'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
