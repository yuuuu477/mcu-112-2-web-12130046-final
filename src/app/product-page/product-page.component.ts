import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductCardListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent implements OnInit {
  router = inject(Router);

  private productService = inject(ProductService);

  products!: Product[];

  ngOnInit(): void {
    this.productService = new ProductService();
    this.products = this.productService.getList();
  }

  onEdit(product: Product): void {
    this.router.navigate(['product', 'form', product.id]);
  }
  onView(product: Product): void {
    this.router.navigate(['product', 'view', product.id]);
  }
}
