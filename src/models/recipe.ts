import IngredientAmount from "./ingredientAmount";

export default class Recipe {
    public id: number;
    public name: string;
    public description: string;
    public ingredients: IngredientAmount[];

    constructor() {
        this.id = 0;
        this.name = "";
        this.description = "";
        this.ingredients = [];
    }
}