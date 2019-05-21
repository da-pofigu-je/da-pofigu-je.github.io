import React, { Component } from "react";
import Recipe from "../models/recipe";
import RecipeList from "./RecipeList";

interface IState {
    recipes: Recipe[];
    currentRecipe: Recipe | null;
}

export default class Recipes extends Component<{}, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            currentRecipe: null,
            recipes: [
                {
                    id: 1,
                    name: "name",
                    description: "descr",
                    ingredients: [
                        {
                            ingredient: { id: 1, name: "test" },
                            amount: "10 гр"
                        },
                        {
                            ingredient: { id: 1, name: "test" },
                            amount: "10 гр"
                        }
                    ]
                }
            ]
        };
    }

    public render = () => {
        return (
            <section className="recipes">
                <RecipeList recipes={this.state.recipes} onDelete={this.handleDelete} onEdit={this.handleEdit} />
            </section>
        );
    }

    private handleEdit = (recipe: Recipe) => {
        this.setState({
            currentRecipe: recipe
        });
    }

    private handleDelete = (recipe: Recipe) => {
        this.setState({
            recipes: [...this.state.recipes].filter(x => x !== recipe)
        });
    }
}
