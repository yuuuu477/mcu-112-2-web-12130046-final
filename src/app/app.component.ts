import { Component } from '@angular/core';
import { ProductCardListComponent } from './product-card-list/product-card-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductCardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
/*productName = 'A產品';
  authors = '作者A、作者B、作者C';
  company = '博碩文化';
  isShow = true;
  imgUrl = 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img';
  createDate = new Date();
  price = 1580.0;*/
