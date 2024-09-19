import { Component, inject } from '@angular/core';
import { Pedido } from '../models/Pedido';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {

  cooking : boolean = false;
  pedidosPendientes : Pedido[] = [];
  pedidosEnCoccion : Pedido[] = [];
  indexPedidoActual : number = 0;

  private restaurantService = inject(RestaurantService);

  constructor() {
    this.pedidosPendientes = this.restaurantService.getPedidosIngresados();
  }

  cocinarPedido(index: number) {
    this.cooking = true
    this.pedidosEnCoccion.push(this.pedidosPendientes[index])
    this.indexPedidoActual = index;
   
  }

  onPedidoCocinado() {
    this.cooking = false;
    this.pedidosEnCoccion = [];
    this.restaurantService.pedidoTerminado(this.indexPedidoActual)
  }
}
