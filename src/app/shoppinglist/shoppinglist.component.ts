import { Component, OnInit } from "@angular/core";
import { ShoppingcartService } from "../shoppingcart.service";
import {ProductsearchPipe} from './../../productsearch.pipe'

@Component({
  selector: "app-shoppinglist",
  templateUrl: "./shoppinglist.component.html",
  styleUrls: ["./shoppinglist.component.css"]
})
export class ShoppinglistComponent implements OnInit {
  shoppingDetails: Object;
  allProducts = [];
  searchInfoDetails:any;
  constructor(private shoppingcartService: ShoppingcartService) {}

  ngOnInit() {
    this.getProducts();
    this.shoppingcartService.itemSearch.subscribe(value =>{
      this.searchInfoDetails = value;
    })
  }
  getProducts() {
    let productDetails = JSON.parse(localStorage.getItem("productDetails"));
    if (productDetails == null) {
      this.shoppingcartService.getProducts().subscribe(response => {
        // console.log(response);
        this.shoppingDetails = response;
        localStorage.setItem(
          "productDetails",
          JSON.stringify(this.shoppingDetails)
        );
      });
    }
    this.shoppingDetails = productDetails;
  }

  getProduct(product) {
    if (!product.qty) {
      product.qty = 1;
    }
    if (this.allProducts.length == 0) {
      this.allProducts.push(product);
    } else {
      let isExist = false;
      this.allProducts.map(prod => {
        if (prod.name == product.name) {
          isExist = true;
          product.qty++;
        }
      });
      if (!isExist) {
        this.allProducts.push(product);
      }
    }
    console.log(this.allProducts);
    this.shoppingcartService.addProductsToCart(this.allProducts);
  }
}
