import React, { Component } from "react";
import Recipe from "../../models/recipe";

export interface IProps {
    recipes: Recipe[];
    onDelete: (recipe: Recipe) => any;
    onEdit: (recipe: Recipe) => any;
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
                        <th />
                    </tr>
                </thead>
                <tbody>{recipes.map((x, i) => this.renderRow(x, i))}</tbody>
            </table>
        );
    }

    private renderRow = (recipe: Recipe, index: number) => {
        const { onEdit } = this.props;
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
                <td>
                    <button onClick={() => onEdit(recipe)} type="button">
                        <i className="fas fa-edit" />
                    </button>
                    <button onClick={() => this.handleDelete(recipe)} type="button">
                        <i className="fas fa-trash-alt" />
                    </button>
                </td>
            </tr>
        );
    }

    private handleDelete = (recipe: Recipe) => {
        const ok: boolean = confirm("вы уверены?");
        if (!ok) {
            return;
        }

        this.props.onDelete(recipe);
    }
}
