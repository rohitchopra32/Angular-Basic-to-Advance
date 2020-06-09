import { Injectable } from '@angular/core';

import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list-service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

    recipeChanged = new Subject<Recipe[]>();

    constructor(private shoppinglistService: ShoppingListService) { }

    private recipes: Recipe[] = [];
    //  = [
    //     new Recipe(
    //         '1 Test Recipe',
    //         'test description',
    //         'https://storage.googleapis.com/myphones/Apple/apple_iphone_11_128gb/Camera_Samples/0a27916060542b0a3918dd2b05975f06bc0f321c.jpeg',
    //         [
    //             new Ingredient('Meat', 1),
    //             new Ingredient('French Fries', 2)
    //         ]
    //     ),
    //     new Recipe('2 Test Recipe', 'test description', 'https://storage.googleapis.com/myphones/Apple/apple_iphone_11_128gb/Camera_Samples/0a27916060542b0a3918dd2b05975f06bc0f321c.jpeg', [new Ingredient('Meat', 1), new Ingredient('French Fries', 2)]),
    //     new Recipe('3 Test Recipe', 'test description', 'https://storage.googleapis.com/myphones/Apple/apple_iphone_11_128gb/Camera_Samples/0a27916060542b0a3918dd2b05975f06bc0f321c.jpeg', [new Ingredient('Meat', 1), new Ingredient('French Fries', 2)]),
    //     new Recipe('4 Test Recipe', 'test description', 'https://storage.googleapis.com/myphones/Apple/apple_iphone_11_128gb/Camera_Samples/0a27916060542b0a3918dd2b05975f06bc0f321c.jpeg', [new Ingredient('Meat', 1), new Ingredient('French Fries', 2)]),
    // ];

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppinglistService.addIngredients(ingredients)
    }

    getRecipe(index: number) {
        return this.recipes.slice()[index];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice())
    }
}