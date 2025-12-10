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
      nombre: 'tomahawk dodge',
      descripcion : 'Description of Product1',
      precio: 5500000000
,
      imagen: 'assets/touh.jpg',
    },
    {
      id: 2,
      nombre: 'Suzuki GSX-R1000R',
      descripcion : 'moto deportiva de alto rendimiento ',
      precio: 98900000,
      imagen: 'assets/gsx.jpg',
       },
    {
      id: 3,
      nombre: 'CFMOTO 250SR',
      descripcion : ' deportiva 250cc diseño en blanco ',
      precio: 17990000 ,
      imagen: 'assets/galgo.webp',
         },
    {
      id: 4,
      nombre: 'Suzuki Gixxer 250',
      descripcion : 'susuki de motor 249cc',
      precio: 15580000,
      imagen: 'assets/250cc.webp',
               },
    {
      id: 5,
      nombre: 'Yamaha Tracer 9 GT',
      descripcion : 'nueva marca de moto yamaha',
      precio: 77000000.0,
      imagen: 'assets/tracer.webp',
               },
    {
      id: 6,
      nombre: 'yamaha XSR900',
      descripcion : 'moto de alto cilindraje yamaha',
      precio: 67000000.0,
      imagen: 'assets/yamaha.jpg',
   }
                
  ]
 constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}