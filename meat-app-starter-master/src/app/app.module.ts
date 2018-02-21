import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ROUTES } from 'app/app.routes';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { MenuComponent } from 'app/restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from 'app/restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from 'app/restaurant-detail/menu-item/menu-item.component';
import { RestaurantDetailComponent } from 'app/restaurant-detail/restaurant-detail.component';
import { ReviewsComponent } from 'app/restaurant-detail/reviews/reviews.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SharedModule } from 'app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router/src/router';
//import { NotFoundComponent } from './not-found/not-found.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LoginComponent } from 'app/security/login/login.component';
import { NotFoundComponent } from 'app/not-found/not-found.component';
import { UserDetailComponent } from './user-detail/user-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    MenuComponent,
    ShoppingCartComponent,
    RestaurantDetailComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    NotFoundComponent,
    LoginComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    HttpClientModule,
    //RouterModule.forRoot(ROUTES,{preloadingStrategy:PreloadAllModules}),
    RouterModule.forRoot(ROUTES),
  ],
 // providers: [{provide:LocationStrategy, useClass:HashLocationStrategy},{provide:LOCALE_ID,useValue:'pt-BR'}],
  providers: [{provide:LOCALE_ID,useValue:'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
