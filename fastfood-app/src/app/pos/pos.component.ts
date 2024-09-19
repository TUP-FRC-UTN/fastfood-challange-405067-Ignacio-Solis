import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Pedido } from '../models/Pedido';
import { RestaurantService } from '../restaurant.service';
@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class POSComponent {

  @Output() onFormSave = new EventEmitter<Pedido>();
  private restaurantService = inject(RestaurantService)

  pedido : Pedido;
  lastNumber : number = 0;
  constructor() {

    this.pedido = {
      name : "",
      description: "",
      date: new Date(),
      number: 0
      
    }

  }


  save(form : NgForm) {
    if (form.invalid) {
      alert("Pedido invalido")
    }
    else {
      // this.pedido["name"] = form.value["nombre"];
      // this.pedido["description"] = form.value["description"];
      // this.pedido.number+=1
      // console.log(this.pedido);
      let nuevoPedido : Pedido = form.value
      this.lastNumber+=1
      nuevoPedido.number = this.lastNumber
      nuevoPedido.date = new Date();
      
      this.restaurantService.ingresarPedido(nuevoPedido)
      this.onFormSave.emit();
      form.reset
    }
    }
}
