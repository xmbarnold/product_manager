import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private _http: HttpClient) { }

  getAllProducts(){
    return this._http.get('/products');
  }
  getOneProduct(prodID){
    return this._http.get(`/products/${prodID}`);
  }
  addProduct(newProd){
    return this._http.post('/products', newProd);
  }
  updateProduct(updateProd){
    return this._http.put(`/products/${updateProd._id}`, updateProd);
  }
  deleteProduct(prodID){
    return this._http.delete(`/products/${prodID}`);
  }
}
