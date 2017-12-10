import { Component, OnInit ,Input} from '@angular/core';
import { retry } from 'rxjs/operator/retry';

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html'
})
export class DeliveryCostsComponent implements OnInit {

  constructor() { }

  @Input() delivery:number;
  @Input() itemsValue:number;
  
  ngOnInit() {
  }

  total():number{
    return this.delivery + this.itemsValue;
  }
}
