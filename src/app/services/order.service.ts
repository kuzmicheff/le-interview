import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order} from 'src/app/interfaces/order.interface';

@Injectable()
export class OrderService {

  private url: string = "api/orders/";

  constructor(
    private http: HttpClient
  ) {}

  public getOrderList() {
    return this.http.get<Order[]>(this.url);
  }

  public getOrderDetail(id: string) {
    return this.http.get<Order>(this.url + id);
  }
}
