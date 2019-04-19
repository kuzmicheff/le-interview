import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OrderService } from 'src/app/services/order.service';
import { Order} from 'src/app/classes/order.class';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  constructor(private orderService: OrderService,
              private route: ActivatedRoute ) { }

  public order: Order = new Order(null, null, null, null, []);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.orderService.getOrderDetail(id).subscribe(
        (order: Order) => this.order = {...order},
        error => console.log(error) 
      );
  }

}
