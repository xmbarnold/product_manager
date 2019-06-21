import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct;
  errors = [];
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) { }

  ngOnInit() {
    this.newProduct = {
      title: '',
      price: 0.00,
      url: '',
    }
  }

  createProduct(){
    this.errors = [];
    let observable = this._httpService.addProduct(this.newProduct);
    observable.subscribe(data => {
      console.log('=======createProduct data', data)
      if(data['message'] === 'Error:'){
        console.log(data['error']['errors']);
        if(data['error']['errors']['title']){
          this.errors.push(data['error']['errors']['title'])
        }
        if(data['error']['errors']['price']){
          this.errors.push(data['error']['errors']['price'])
        }
        if(data['error']['errors']['url']){
          this.errors.push(data['error']['errors']['url'])
        }
        if(data['error']['errors']['exists']){
          this.errors.push(data['error']['errors']['exists'])
        }
        console.log(this.errors);
      }
      else{
        this._router.navigate(['/all']);
      }
    })
  }

}
