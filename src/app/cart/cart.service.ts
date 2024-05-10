import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Product[]= [];

  constructor( ) {
    let cartProducts = localStorage.getItem('cart')
    this.cart = cartProducts ? JSON.parse(cartProducts) : [];
  }

    addToCart(product: Product): void{
      product.id = Date.now().toString();
      this.cart.push(product)
      localStorage.setItem('cart', JSON.stringify(this.cart))    }


    getCartItems():  Product[]{
      return this.cart;
     }

     deleteCartItem(id: string): void{
      let index = this.cart.findIndex(res => res.id === id)
      this.cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.cart))
    
     }

     clearCart():void{
      localStorage.clear()
     }

    
}
