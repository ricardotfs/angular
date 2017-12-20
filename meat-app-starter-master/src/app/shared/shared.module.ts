import { NgModule } from "@angular/core";
import { InputComponent } from "app/shared/input/input.component";
import { RadioComponent } from "app/radio/radio.component";
import { RatingComponent } from "app/rating/rating.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.services";
import { OrderService } from "app/order/order-services";



@NgModule({
    declarations:[InputComponent,RadioComponent,RatingComponent],
    imports:[CommonModule,FormsModule,ReactiveFormsModule],
    exports:[
            InputComponent,RadioComponent,RatingComponent,
            CommonModule,FormsModule,ReactiveFormsModule
    ]
})
export class SharedModule{

    static forRoot():ModuleWithProviders{
        return{
            ngModule:SharedModule,
            providers:[ShoppingCartService,RestaurantsService,OrderService]
            
        }
    }
}