import React, { Component } from "react";
import Recipe from "../models/recipe";
import Ingredient from "../models/ingredient";

export interface IProps {
    recipes: Recipe[];
}

export default class RecipeList extends Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }
    public render = () => {
        const { recipes } = this.props;

        return (
            <table className="table-hover table-bordered w-100">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Название</th>
                        <th>Описание</th>
                        <th>Ингредиенты</th>
                    </tr>
                </thead>
                <tbody>{recipes.map((x, i) => this.renderRow(x, i))}</tbody>
            </table>
        );
    }
    private renderRow = (recipe: Recipe, index: number) => {
        const ingredientsStr = recipe.ingredients
            .filter(ingredient => ingredient.ingredient !== null)
            .map(ingredient => ingredient.ingredient!.name + " " + ingredient.amount)
            .join(" ; ");
        return (
            <tr key={index}>
                <td>{recipe.id}</td>
                <td>{recipe.name}</td>
                <td>{recipe.description}</td>
                <td>{ingredientsStr}</td>
            </tr>
        );
    }
}