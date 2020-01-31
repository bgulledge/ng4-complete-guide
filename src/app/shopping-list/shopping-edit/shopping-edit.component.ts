import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() ingredientAdded = new EventEmitter<{name:string, amount: string}>();
    
  
  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    this.ingredientAdded.emit({
      name: this.nameInput.nativeElement.value, 
      amount: this.amountInput.nativeElement.value
    });
  }

}
