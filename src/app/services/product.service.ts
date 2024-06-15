import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _data = [
    new Product({
      id: 1,
      name: '書籍 A',
      authors: ['作者A', '作者B', '作者C'],
      company: '博碩文化',
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
      price: 1580.0,
    }),
    new Product({
      id: 2,
      name: '書籍 B',
      authors: ['作者A', '作者B', '作者C'],
      company: '博碩文化',
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
      price: 1580.0,
    }),
    new Product({
      id: 3,
      name: '書籍 C',
      authors: ['作者A', '作者B', '作者C'],
      company: '博碩文化',
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
      price: 1580.0,
    }),
    new Product({
      id: 4,
      name: '書籍 D',
      authors: ['作者A', '作者B', '作者C'],
      company: '博碩文化',
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
      price: 1580.0,
    }),
    new Product({
      id: 5,
      name: '書籍 E',
      authors: ['作者A', '作者B', '作者C'],
      company: '博碩文化',
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
      price: 1580.0,
    }),
    new Product({
      id: 6,
      name: '書籍 F',
      authors: ['作者A', '作者B', '作者C'],
      company: '博碩文化',
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
      price: 1580.0,
    }),
  ];
  getById(productId: number): Observable<Product> {
    const product = this._data.find(({ id }) => id === productId)!;
    return of(product);
  }

  getList(): Observable<Product[]> {
    return of(this._data).pipe(delay(2000));
  }
}
