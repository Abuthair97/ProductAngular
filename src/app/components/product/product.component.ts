import {Component, EventEmitter, Input, Output} from '@angular/core';
import { RatingModule } from 'primeng/rating';
import {FormsModule} from "@angular/forms";
import {CurrencyPipe} from "@angular/common";
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RatingModule, FormsModule, CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!:any ;
  @Output() productOutput:EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(){
    this.productOutput.emit(this.product)
  }
}
