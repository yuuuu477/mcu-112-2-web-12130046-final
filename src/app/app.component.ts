import { Component } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  productName = 'A產品';
  authors = '作者A、作者B、作者C';
  company = '博碩文化';
  isShow = true;
  imgUrl = 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img';

  onIsShowChange(isShow: boolean): void {
    this.isShow = isShow;
  }
}
