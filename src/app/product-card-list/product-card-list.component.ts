import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-card-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.css',
})
export class ProductCardListComponent {
  product = new Product({
    id: 1,
    name: '書籍 A',
    authors: '作者A、作者B、作者C',
    company: '博碩文化',
    isShow: true,
    imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    createDate: new Date(),
    price: 1580.0,
  });
}
