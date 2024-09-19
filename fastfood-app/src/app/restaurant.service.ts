import { Injectable } from '@angular/core';
import { Pedido } from './models/Pedido';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }

  private pedidosIngresados : Pedido[] = [];
  private pedidosListos : Pedido[] = [];

  public getPedidosIngresados() : Pedido[] {
    return this.pedidosIngresados
  }

  public ingresarPedido(pedido : Pedido) {
    this.pedidosIngresados.push(pedido);
  }


  public getPedidosListos() {
    return this.pedidosListos;
  }
  public ingresarPedidoListo(pedido: Pedido) {
    this.pedidosListos.push(pedido);
  } 
  
  public pedidoTerminado(index : number) {
    this.pedidosIngresados.splice(index,1)
  }
  
}
