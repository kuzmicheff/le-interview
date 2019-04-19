import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { OrderService } from 'src/app/services/order.service';
import { Order} from 'src/app/interfaces/order.interface';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  constructor(private orderService: OrderService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  orders: Order[];
  columns: String[] = ["ID", "TimeStamp", "Total", "Customer", "Items"];
  keys: String[] = ["id", "timestamp", "total", "customer", "items"]

  ngOnInit() {
    this.orderService.getOrderList().subscribe(
      (orders: Order[]) => this.orders = orders,
      errors => console.log(errors)
    );
  }

  public id:any;
  
  public highlightRow(order) {
    this.id = order.id;
  }

  public loadDetail(id: any) {
    this.router.navigate(['order', id], {relativeTo: this.activatedRoute});
  }
}
