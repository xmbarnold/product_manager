import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  editProduct;
  editID;
  errors = [];
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.editID = params['id'];
    })
    this.getProduct(this.editID);
  }

  getProduct(prodID){
    let observable = this._httpService.getOneProduct(prodID);
    observable.subscribe(data => {
      this.editProduct = data['result'];
    })
  }

  updateProduct(){
    this.errors = [];
    let observable = this._httpService.updateProduct(this.editProduct);
    observable.subscribe(data => {
      if(data['message'] === 'Error:'){
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
          console.log(this.errors);
        }
      }
      else{
        this._router.navigate(['/all']);
      }
      // if(data['message'] === 'Success:'){
      //   this._router.navigate(['/all']);
      // }
    })
  }

}
