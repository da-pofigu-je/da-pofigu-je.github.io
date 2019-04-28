import React, { Component } from "react";
import IngredientList from "./IngredientList";
import IngredientForm from "./IngredientForm";
import Ingredient from "../models/ingredient";

interface IState {
    ingredients: Ingredient[];
    currentIngredient: Ingredient | null;
}

export default class Ingredients extends Component<{}, IState> {
    private idCount = 1;

    constructor(props: {}) {
        super(props);

        this.state = {
            ingredients: [
                { name: "Яблоко", id: this.idCount++ },
                { name: "Апельсин", id: this.idCount++ },
                { name: "Чеснок", id: this.idCount++ },
                { name: "Молоко", id: this.idCount++ }
            ],
            currentIngredient: null
        };
    }

    public render = () => {
        return (
            <section className="ingredients">
                <IngredientForm
                    ingredient={this.state.currentIngredient}
                    onCancel={this.handleCancelEdit}
                    onAddOrSave={this.handleSave}
                />
                {this.renderAddBtnIfNeed()}
                <IngredientList
                    ingredients={this.state.ingredients}
                    onDelete={this.handleDelete}
                    onEdit={this.handleEdit}
                />
            </section>
        );
    }

    private renderAddBtnIfNeed = () => {
        return this.state.currentIngredient === null ? (
            <button type="button" className="btn btn-primary" onClick={this.handleAddRequest}>
                Add
            </button>
        ) : null;
    }

    private handleCancelEdit = () => {
        this.setState({
            currentIngredient: null
        });
    }

    private handleSave = (ingredient: Ingredient) => {
        if (this.state.currentIngredient === null) {
            return;
        }

        if (this.state.ingredients.findIndex(x => x.name === ingredient.name) >= 0) {
            alert(`ингредиент с именем '${ingredient.name}' уже есть!`);
            return;
        }

        if (this.state.currentIngredient.id === 0) {
            const newIngredients: Ingredient[] = [...this.state.ingredients];
            ingredient.id = this.idCount++;
            newIngredients.push(ingredient);
            this.setState({
                ingredients: newIngredients,
                currentIngredient: null,
            });

            return;
        }

        this.state.currentIngredient.name = ingredient.name;
        this.setState({
            currentIngredient: null,
        });
    }

    private handleAddRequest = () => {
        this.setState({
            currentIngredient: new Ingredient()
        });
    }

    private handleEdit = (ingredient: Ingredient) => {
        this.setState({
            currentIngredient: ingredient
        });
    }

    private handleDelete = (ingredient: Ingredient) => {
        this.setState({
            ingredients: [...this.state.ingredients].filter(x => x !== ingredient)
        });
    }
}
