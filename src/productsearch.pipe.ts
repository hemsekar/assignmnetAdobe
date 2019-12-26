import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productsearch'
})
export class ProductsearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(args[0]){
      let searchStr=args[0]
      let filteredItems = value.filter(obj=>{
        console.log(searchStr.toLowerCase())
        return obj.name.toLowerCase().indexOf(searchStr.toLowerCase())> -1 || obj.category.toLowerCase().indexOf(searchStr.toLowerCase())> -1
      })
      console.log(filteredItems)
      return filteredItems
    }else{
      return value;

    }
  }

}
