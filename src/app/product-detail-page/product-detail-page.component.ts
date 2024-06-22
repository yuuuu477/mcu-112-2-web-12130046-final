import { ShoppingCartService } from './../service/shopping-cart.service';
import { ShoppingCartPageComponent } from './../shopping-cart-page/shopping-cart-page.component';
import { CurrencyPipe } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  inject,
  numberAttribute,
} from '@angular/core';
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
export class ProductDetailPageComponent implements OnInit {
  @Input({ transform: numberAttribute })
  id!: number;

  product!: Product;

  private router = inject(Router);
  private readonly ShoppingCartService = inject(ShoppingCartService);

  private productService = inject(ProductService);
  private shoppingCartService = inject(ShoppingCartService);
  ngOnInit(): void {
    this.productService
      .getById(this.id)
      .subscribe((product) => (this.product = product));
  }
  onEdit(): void {
    this.router.navigate(['product', 'form', this.product.id]);
  }

  onAddCart(product: Product): void {
    this.shoppingCartService.addProduct(product);
  }

  onRemove(): void {
    this.router.navigate(['products']);
  }
  onBack(): void {
    this.router.navigate(['products']);
  }
}
