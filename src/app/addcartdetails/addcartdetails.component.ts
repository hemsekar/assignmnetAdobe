import { Component, OnInit } from "@angular/core";
import { ShoppingcartService } from "../shoppingcart.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-addcartdetails",
  templateUrl: "./addcartdetails.component.html",
  styleUrls: ["./addcartdetails.component.css"]
})
export class AddcartdetailsComponent implements OnInit {
  products = [];
  productCaculations = {
    totalPrice: 0,
    discount: 0,
    totalPayble: 0
  };
  productDetails;
  constructor(
    private shoppingservice: ShoppingcartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productDetails = JSON.parse(localStorage.getItem("userProducts"));
    console.log(this.productDetails);
    this.calculate(this.productDetails);
  }

  changeItem(val, obj) {
    if (val == "dec") {
      obj.qty--;
      this.calculate(this.productDetails);
    } else {
      obj.qty++;
      this.calculate(this.productDetails);
    }
  }
  removeItem(i) {
    this.productDetails.splice(i, 1);
    this.shoppingservice.addProductsToCart(this.productDetails);
    this.calculate(this.productDetails);
    if (this.productDetails.length == 0) {
      this.router.navigate(["/"]);
    }
  }
  calculate(productDetails) {
    this.productCaculations = {
      totalPrice: 0,
      discount: 0,
      totalPayble: 0
    };
    productDetails.map(product => {
      let priceAmount = product.price * product.qty;
      let discount = product.discount * product.qty;

      this.productCaculations.totalPrice += priceAmount;
      this.productCaculations.discount += discount;
    });
    this.productCaculations.totalPayble =
      this.productCaculations.totalPrice - this.productCaculations.discount;
    console.log(this.productCaculations);
  }
}
