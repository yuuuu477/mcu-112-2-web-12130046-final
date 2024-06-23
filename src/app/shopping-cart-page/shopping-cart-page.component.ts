import { OrderService } from './../interface/order.service';
import { Order } from './../interface/order';
import { ShoppingCartService } from './../service/shopping-cart.service';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IOrderForm } from '../interface/order-form.interface';
import { filter, map, Observable } from 'rxjs';
import { IOrderDetailForm } from '../interface/order-detail-form.interface';
import { Product } from '../model/product';
import { OrderDetail } from '../interface/order-detail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart-page',
  standalone: true,
  imports: [CurrencyPipe, ReactiveFormsModule],
  templateUrl: './shopping-cart-page.component.html',
  styleUrl: './shopping-cart-page.component.css',
})
export class ShoppingCartPageComponent implements OnInit {
  private router = inject(Router);
  readonly shoppingCartService = inject(ShoppingCartService);
  readonly OrderService = inject(OrderService);
  readonly form = new FormGroup<IOrderForm>({
    name: new FormControl<string | null>(null, {
      validators: [Validators.required],
    }),
    address: new FormControl<string | null>(null, {
      validators: [Validators.required],
    }),
    telephone: new FormControl<string | null>(null, {
      validators: [Validators.required],
    }),
    details: new FormArray<FormGroup<IOrderDetailForm>>([]),
  });

  get name(): FormControl<string | null> {
    return this.form.get('name') as FormControl<string | null>;
  }

  get address(): FormControl<string | null> {
    return this.form.get('name') as FormControl<string | null>;
  }

  get telephone(): FormControl<string | null> {
    return this.form.get('name') as FormControl<string | null>;
  }

  get details(): FormArray<FormGroup<IOrderDetailForm>> {
    return this.form.get('details') as FormArray<FormGroup<IOrderDetailForm>>;
  }

  private readonly destroyRef = inject(DestroyRef);
  totalPrice = 0;

  get formData(): Order {
    return new Order({
      name: this.name.value!,
      address: this.address.value!,
      telephone: this.telephone.value!,
      details: this.details.value.map((item) => new OrderDetail(item)),
    });
  }

  ngOnInit(): void {
    this.details.valueChanges
      .pipe(
        map((item) =>
          item.length === 0
            ? 0
            : item
                .map((item) => item.price || 0)
                .reduce((total, price) => total + price)
        ),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((totalPrice) => (this.totalPrice = totalPrice));

    this.setOrderDetail();
  }

  private setOrderDetail() {
    for (const item of this.shoppingCartService.data) {
      const control = new FormGroup<IOrderDetailForm>({
        id: new FormControl<number>(item.id, { nonNullable: true }),
        product: new FormControl<Product>(item.product, { nonNullable: true }),
        count: new FormControl<number>(item.count, { nonNullable: true }),
        price: new FormControl<number>(item.product.price * item.count, {
          nonNullable: true,
        }),
      });
      control
        .get('count')
        ?.valueChanges.pipe(
          filter((value) => value !== undefined),
          map((value) => value * item.product.price),
          takeUntilDestroyed(this.destroyRef)
        )
        .subscribe((price) =>
          control.get('price')!.setValue(price, { emitEvent: false })
        );
      this.details.push(control);
    }
  }
  onDelete(index: number, id: number): void {
    this.details.removeAt(index);
    this.shoppingCartService.removeProduct(id);
  }
  onSave(): void {
    this.OrderService.add(this.formData).subscribe(() => {
      this.shoppingCartService.clear();
      void this.router.navigate(['/']);
    });
  }
}
