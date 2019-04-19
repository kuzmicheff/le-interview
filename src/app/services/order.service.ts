import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order} from 'src/app/interfaces/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private URL: string = "api/orders/";

  constructor(private httpClient: HttpClient) { }

  public getOrderList() {
    return this.httpClient.get<Order[]>(this.URL);
  }

  public getOrderDetail(id: string) {
    return this.httpClient.get<Order>(this.URL  + id);
  }
}
