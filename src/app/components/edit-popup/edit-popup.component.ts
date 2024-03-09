import {Component, EventEmitter, Input, Output} from '@angular/core';
import{DialogModule} from "primeng/dialog";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-edit-popup',
  standalone: true,
  imports: [DialogModule,CommonModule],
  templateUrl: './edit-popup.component.html',
  styleUrl: './edit-popup.component.css'
})
export class EditPopupComponent {
@Input() display:boolean = false;

}



