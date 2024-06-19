import { AsyncPipe, JsonPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  Subject,
  combineLatest,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { Product } from '../model/product';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { ProductService } from '../service/product.service';
import { ShoppingCartService } from '../service/shopping-cart.service';
@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, ReactiveFormsModule, ProductCardListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {
  router = inject(Router);

  private productService = inject(ProductService);

  readonly shoppingCartService = inject(ShoppingCartService);

  protected pageSize = 5;
  protected readonly formControl = new FormControl<string | undefined>(
    undefined,
    { nonNullable: true }
  );

  products!: Product[];
  private readonly refresh$ = new Subject<void>();
  private readonly condition$ = new BehaviorSubject<string | undefined>(
    undefined
  );
  get condition() {
    return this.condition$.value;
  }
  set condition(value: string | undefined) {
    this.condition$.next(value);
  }

  private readonly pageIndex$ = new BehaviorSubject<number>(1);
  get pageIndex() {
    return this.pageIndex$.value;
  }
  set pageIndex(value: number) {
    this.pageIndex$.next(value);
  }

  readonly products$ = combineLatest([
    this.refresh$.pipe(
      startWith(undefined),
      tap((condition) => console.log('refresh', condition))
    ),
    this.condition$.pipe(
      tap((condition) => console.log('condition', condition))
    ),
    this.pageIndex$.pipe(tap((index) => console.log('pageIndex', index))),
  ]).pipe(
    tap((data) => console.log(data)),
    switchMap(([_, condition, pageIndex]) =>
      this.productService.getList(condition, pageIndex, this.pageSize)
    ),
    tap((data) => console.log(data))
  );

  readonly totalCount$ = combineLatest([
    this.refresh$.pipe(startWith(undefined)),
    this.condition$,
  ]).pipe(
    switchMap(([_, condition]) => this.productService.getCount(condition))
  );

  onPageIndexChange(index: number): void {
    console.log(index);
    this.pageIndex = index;
  }
  onAdd(): void {}

  onEdit(product: Product): void {
    this.router.navigate(['product', 'form', product.id]);
  }

  onView(product: Product): void {
    this.router.navigate(['product', 'view', product.id]);
  }
}
