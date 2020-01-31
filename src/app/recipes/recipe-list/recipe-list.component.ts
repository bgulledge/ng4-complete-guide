import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'A test dude', 'https://en.wikipedia.org/wiki/File:Good_Food_Display_-_NCI_Visuals_Online.jpg'),
    new Recipe('Test Recipe2', 'A test again!', 'https://en.wikipedia.org/wiki/File:Good_Food_Display_-_NCI_Visuals_Online.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
