import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Test Recipe",
      "Recipe Time",
      "https://images.unsplash.com/photo-1515449440149-4396ddd9218b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    ),
    new Recipe(
      "Second Recipe",
      "New Test",
      "https://images.unsplash.com/photo-1515449440149-4396ddd9218b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
