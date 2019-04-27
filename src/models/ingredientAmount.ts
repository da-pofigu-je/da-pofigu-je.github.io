import Ingredient from "./ingredient";

export default class IngredientAmount {
    public ingredient: Ingredient | null;
    public amount: string;

    constructor() {
        this.ingredient = null;
        this.amount = "";
    }
}