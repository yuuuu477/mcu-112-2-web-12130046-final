import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  _data = [
    new Product({
      id: 1,
      name: '書籍 A',
      authors: ['作者A', '作者B', '作者C'],
      company: '博碩文化',
      isShow: true,
      discount: true,
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
      discount: false,
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
      discount: false,
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
      discount: false,
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
      discount: false,
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
      discount: false,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
      price: 1580.0,
    }),
    new Product({
      id: 7,
      name: '書籍 G',
      authors: ['作者A', '作者B', '作者C'],
      company: '博碩文化',
      isShow: true,
      discount: false,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      createDate: new Date(),
      price: 1580.0,
    }),
  ];

  getById(productId: number): Product {
    const product = this._data.find(({ id }) => id === productId)!;
    return product;
  }

  getList(
    name?: string | undefined,
    pageIndex?: number,
    pageSize?: number
  ): Product[] {
    return this._data;
  }

  getCount(name?: string): Observable<number> {
    throw new Error('NO');
  }
}
