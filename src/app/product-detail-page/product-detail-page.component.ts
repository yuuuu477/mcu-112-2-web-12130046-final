import { CurrencyPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css',
})
export class ProductDetailPageComponent {
  @Input()
  private productService = inject(ProductService);
  product = new Product({
    id: 1,
    name: 'A產品',
    authors: ['作者A', '作者B', '作者C'],
    company: '博碩文化',
    isShow: true,
    discount: true,
    imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    createDate: new Date(),
    price: 1580.0,
  });

  private router = inject(Router);

  onEdit(): void {
    this.router.navigate(['product', 'form', this.product.id]);
  }

  onRemove(): void {
    this.router.navigate(['products']);
  }

  onBack(): void {
    this.router.navigate(['products']);
  }
}
