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
import { SnackbarComponent } from "app/shared/messages/snackbar/snackbar.component";
import { NotificationServices } from "app/shared/messages/notification.services";
import {LoginService} from "app/security/login/login.service"

@NgModule({
    declarations:[InputComponent,RadioComponent,RatingComponent, SnackbarComponent],
    imports:[CommonModule,FormsModule,ReactiveFormsModule],
    exports:[
            InputComponent,RadioComponent,RatingComponent,
            CommonModule,FormsModule,ReactiveFormsModule,SnackbarComponent
    ]
})
export class SharedModule{

    static forRoot():ModuleWithProviders{
        return{
            ngModule:SharedModule,
            providers:
            [
                    ShoppingCartService,
                    RestaurantsService,
                    OrderService,
                    NotificationServices,
                    LoginService
                ]
            
        }
    }
}