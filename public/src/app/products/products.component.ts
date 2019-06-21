import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    let observable = this._httpService.getAllProducts();
    observable.subscribe(data => {
      this.allProducts = data['result'];
    })
  }

  destroyProduct(prodID){
    let observable = this._httpService.deleteProduct(prodID);
    observable.subscribe(data => {
      console.log('deleted product');
    })
    this.getProducts();
  }

}
