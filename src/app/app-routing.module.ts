import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcartdetailsComponent } from './addcartdetails/addcartdetails.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ItemComponent } from './item/item.component';



const routes: Routes = [
  {path:'', component:ShoppinglistComponent},
  {path:'cartdetails', component:AddcartdetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
