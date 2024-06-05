import { CurrencyPipe, DatePipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  booleanAttribute,
  numberAttribute,
} from '@angular/core';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() productName!: string;
  @Input() authors!: string;
  @Input() company!: string;

  @Input() imgUrl!: string;

  @Input({ transform: booleanAttribute })
  isShow!: boolean;
  @Output()
  isShowChange = new EventEmitter<boolean>();

  @Input() createDate!: Date;
  @Input({ transform: numberAttribute }) price!: number;
  onSetDisplay(isShow: boolean): void {
    this.isShowChange.emit(isShow);
  }
}
