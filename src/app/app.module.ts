import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { FilterComponent } from './filter/filter.component';
import { SortComponent } from './sort/sort.component';
import { CarticonComponent } from './carticon/carticon.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './item/item.component';
import { AddcartdetailsComponent } from './addcartdetails/addcartdetails.component';
import { ProductsearchPipe } from '../productsearch.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShoppinglistComponent,
    FilterComponent,
    SortComponent,
    CarticonComponent,
    SearchComponent,
    HeaderComponent,
    ItemComponent,
    ProductsearchPipe,
    AddcartdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
