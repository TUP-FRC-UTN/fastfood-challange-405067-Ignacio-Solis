import { Component, inject } from '@angular/core';
import { POSComponent } from "../pos/pos.component";
import { Pedido } from '../models/Pedido';
import { RestaurantService } from '../restaurant.service';
import { KitchenComponent } from "../kitchen/kitchen.component";

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [POSComponent, KitchenComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {

  private restaurantService = inject(RestaurantService)

  pedidosIngresados : Pedido[] = [];
  public onFormSave() {
    this.pedidosIngresados = this.restaurantService.getPedidosIngresados();
  }
}
