import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private url = 'http://localhost:3000/orders';
  private readonly httpClient = inject(HttpClient);
  add(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(this.url, order);
  }
}
