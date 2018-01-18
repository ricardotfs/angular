import { NotificationServices } from 'app/shared/messages/notification.services';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { Component, trigger, state, style, transition, animate, OnInit } from '@angular/core';

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],  
  animations:[
    trigger('snack-visibility',[
      state('hidden',style({
        opacity:0,
        bottom:0
      })),
      state('visible',style({
        opacity:1,
        bottom:30
      })),
      transition('hidden => visible',animate('500ms 0s ease-in')),
      transition('visible => hidden',animate('500ms 0s ease-out '))
           
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  constructor(private notificationServices:NotificationServices) {
    
   }

  message:string = "Hello word!";
  snackVisibility:string = "hidden";
  ngOnInit() {
    this.notificationServices.notifier
      .do(message=>{
      this.message = message
      this.snackVisibility = 'visible'
      
    }).switchMap(message => Observable.timer(3000))
    .subscribe(message=> this.snackVisibility = 'hidden')
  }
}
