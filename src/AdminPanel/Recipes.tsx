import React, { Component } from "react";
import Recipe from "../models/recipe";
import RecipeList from "./RecipeList";
import RecipeForm from "./RecipeForm";

interface IState {
    recipes: Recipe[];
    currentRecipe: Recipe | null;
}

export default class Recipes extends Component<{}, IState> {
    private idCount = 1;

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
                {this.renderFormOrNull()}
                {this.renderAddBtnIfNeed()}
                <RecipeList recipes={this.state.recipes} onDelete={this.handleDelete} onEdit={this.handleEdit} />
            </section>
        );
    }

    private renderAddBtnIfNeed = () => {
        return this.state.currentRecipe === null ? (
            <button type="button" className="btn btn-primary" onClick={this.handleAddRequest}>
                Add
            </button>
        ) : null;
    }

    private handleAddRequest = () => {
        this.setState({
            currentRecipe: new Recipe()
        });
    }

    private renderFormOrNull = () => {
        if (this.state.currentRecipe == null) {
            return null;
        }

        return (
            <RecipeForm
                recipe={this.state.currentRecipe}
                onCancel={this.handleCancelEdit}
                onAddOrSave={this.handleSave}
            />
        );
    }

    private handleSave = (recipe: Recipe) => {
        if (this.state.currentRecipe === null) {
            return;
        }

        if (this.state.currentRecipe.id === 0) {
            const newRecipes: Recipe[] = [...this.state.recipes];
            recipe.id = this.idCount++;
            newRecipes.push(recipe);
            this.setState({
                currentRecipe: null,
                recipes: newRecipes
            });

            return;
        }

        this.state.currentRecipe.name = recipe.name;
        this.setState({
            currentRecipe: null
        });
    }

    private handleCancelEdit = () => {
        this.setState({
            currentRecipe: null
        });
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
