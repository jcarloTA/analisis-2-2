import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private _inventario: any[] = [];
  constructor() {

  }


  get inventario() {
    return this._inventario;
  }

  addInventarioItem(item:any) {
    this._inventario.push(item);
  }


}
