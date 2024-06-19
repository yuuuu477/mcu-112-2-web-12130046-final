import { ShoppingCartService } from './../service/shopping-cart.service';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { IOrderForm } from '../interface/order-form.interface';
import { IOrderDetailForm } from '../interface/order-detail-form.interface';

@Component({
  selector: 'app-shopping-cart-page',
  standalone: true,
  imports: [JsonPipe, CurrencyPipe, ReactiveFormsModule],
  templateUrl: './shopping-cart-page.component.html',
  styleUrl: './shopping-cart-page.component.css',
})
export class ShoppingCartPageComponent {
  readonly shoppingCartService = inject(ShoppingCartService);
  readonly form = new FormGroup<IOrderForm>({
    name: new FormControl<string | null>(null),
    address: new FormControl<string | null>(null),
    telephone: new FormControl<string | null>(null),
    details: new FormArray<FormGroup<IOrderDetailForm>>([]),
  });

  get details(): FormArray<FormGroup<IOrderDetailForm>> {
    return this.form.get('details') as FormArray<FormGroup<IOrderDetailForm>>;
  }
}
