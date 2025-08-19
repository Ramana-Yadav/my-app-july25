import { Component } from '@angular/core';

@Component({
  selector: 'app-product-task',
  templateUrl: './product-task.component.html',
  styleUrls: ['./product-task.component.css']
})
export class ProductTaskComponent {

  products: any = [
    { name: 'pen', price: 10, rating: 3,freedelivery:true},
    { name: 'phone', price: 100, rating: 2,freedelivery:false },
    { name: 'shirt', price: 400, rating: 4,freedelivery:true},
    { name: 'cap', price: 200, rating: 5,freedelivery:false},
    { name: 'mobile case', price: 300, rating: 2,freedelivery:true},
    { name: 'remote', price: 400, rating: 2.5,freedelivery:false},
  ];
  

  sort(){
    this.products.sort((a:any , b:any)=> a.price-b.price);
   
  }
  app(){
    this.products.sort((a:any , b:any)=> b.price-a.price);
   
  }
  ball(){
    this.products.sort((a:any , b:any)=> a.rating-b.rating);
   
  }
  cat(){
    this.products.sort((a:any , b:any)=> b.rating-a.rating);
   
  }

  delete(index:number) {
    
      this.products.splice(index,1);
  }

 deliveryCharges(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price+50;
      return product;
    });
  }

   applyDiscount(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price/2;
      return product;
    });
  }
  
  TotalPrice(){
              var totalprice=this.products.reduce((sum:any, product:any)=>sum+product.price,0);
              alert(totalprice);
  }

}
