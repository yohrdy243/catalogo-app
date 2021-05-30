import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'//'angularfire2/database';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  productosList: AngularFireList<any> | undefined;

  constructor(private firebase : AngularFireDatabase) { }

  getProductos()
  {
    this.productosList = this.firebase.list('productos');
    return this.productosList 
  }

  insertProduct()
  {

  }
}
