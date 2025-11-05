import { Injectable } from '@angular/core';

export interface Product {

  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root',
})
export class Products {

  private products: Product[] = [
    {
      id: 1,
      nombre: 'Product1',
      descripcion : 'Description of Product1',
      precio: 100,
      imagen: 'assets/product1.jpg',
    },
    {
      id: 2,
      nombre: 'Product2',
      descripcion : 'Description of Product2',
      precio: 150,
      imagen: 'assets/product2.jpg',
       },
    {
      id: 3,
      nombre: 'Product2',
      descripcion : 'Description of Product2',
      precio: 150,
      imagen: 'assets/product2.jpg',
         },
    {
      id: 4,
      nombre: 'Product2',
      descripcion : 'Description of Product2',
      precio: 150,
      imagen: 'assets/product2.jpg',
               },
    {
      id: 5,
      nombre: 'Product2',
      descripcion : 'Description of Product2',
      precio: 150,
      imagen: 'assets/product2.jpg',
               },
    {
      id: 6,
      nombre: 'Product2',
      descripcion : 'Description of Product2',
      precio: 150,
      imagen: 'assets/product2.jpg',
   }
                
  ]
 constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}