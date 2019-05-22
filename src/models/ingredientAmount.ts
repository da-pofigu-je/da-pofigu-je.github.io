import Ingredient from "./ingredient";

export default class IngredientAmount {
    public ingredient: Ingredient | null;
    public amount: number;

    constructor() {
        this.ingredient = null;
        this.amount = 0;
    }
}