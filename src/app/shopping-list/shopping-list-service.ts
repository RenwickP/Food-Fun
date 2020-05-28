import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient("Poison", 5),
    new Ingredient("Foods", 8),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
