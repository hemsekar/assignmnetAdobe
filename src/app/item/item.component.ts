import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ShoppingcartService } from "../shoppingcart.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  @Input() product;
  @Output() sendProduct = new EventEmitter();
  constructor(private shoppingservice: ShoppingcartService) {}
  ngOnInit() {}

  addToCart(product) {
    this.sendProduct.next(product);
  }
}
